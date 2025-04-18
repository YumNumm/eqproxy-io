# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM node:lts as base
WORKDIR /usr/src/app
RUN npm i -g bun
# Install curl
RUN apt-get update && \
  apt-get install -y curl python3 python3-pip python3-dev build-essential \
  build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev && \
  apt-get clean && \
  rm -rf /var/lib/apt/lists/*

FROM base as cache
COPY . .
RUN bun install

WORKDIR /usr/src/app/service/supabase-proxy
ENV NODE_ENV=production
RUN bun install
RUN bun run build

# copy production dependencies and source code into final image
FROM base
COPY --from=cache /usr/src/app/service/supabase-proxy/package.json .
COPY --from=cache /usr/src/app/service/supabase-proxy/server.js .
COPY --from=cache /usr/src/app/node_modules ./node_modules

# run the app
ENTRYPOINT [ "bun", "run", "server.js" ]
