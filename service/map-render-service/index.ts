import { Map, MapMode, RenderOptions } from "@maplibre/maplibre-gl-native"
import sharp from "sharp"

console.log("Map render service is running")

async function bufferToPng(buffer: Uint8Array, width: number, height: number) {
  // Un-premultiply pixel values
  // Mapbox GL buffer contains premultiplied values, which are not handled correctly by sharp
  // https://github.com/mapbox/mapbox-gl-native/issues/9124
  // since we are dealing with 8-bit RGBA values, normalize alpha onto 0-255 scale and divide
  // it out of RGB values

  for (let i = 0; i < buffer.length; i += 4) {
    const alpha = buffer[i + 3]
    const norm = alpha / 255
    if (alpha === 0) {
      buffer[i] = 0
      buffer[i + 1] = 0
      buffer[i + 2] = 0
    } else {
      buffer[i] /= norm
      buffer[i + 1] = buffer[i + 1] / norm
      buffer[i + 2] = buffer[i + 2] / norm
    }
  }

  return sharp(buffer, {
    raw: {
      width: width,
      height: height,
      channels: 4,
    },
  })
    .png()
    .toBuffer()
}

async function renderMap(map: Map, mapOptions: RenderOptions) {
  return new Promise<Uint8Array>((resolve, reject) => {
    map.render(mapOptions, (err, buffer) => {
      if (err) {
        return reject(err)
      }
      if (buffer === undefined) {
        return reject(new Error("No buffer returned from map render"))
      }
      resolve(buffer)
    })
  })
}

async function render(style: string, mapOptions: RenderOptions) {
  const map = new Map({
    mode: MapMode.Static,
  })

  map.load(style)
  const buffer = await renderMap(map, mapOptions)
  const pngBuffer = await bufferToPng(
    buffer,
    mapOptions.width ?? 512,
    mapOptions.height ?? 512
  )
}
