export function parseNumberOrNull(value: string | null | undefined): number | null {
  if (value == null) {
    return null
  }
  const parsed = Number(value)
  return isNaN(parsed) ? null : parsed
}

export function parseNumber(
  value: string,
  { defaultValue = 0 } = { defaultValue: 0 }
): number {
  const parsed = Number(value)
  return isNaN(parsed) ? defaultValue : parsed
}