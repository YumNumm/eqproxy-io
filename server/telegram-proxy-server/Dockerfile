# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1 as base
WORKDIR /usr/src/app
# Install curl
RUN apt-get update && \
    apt-get install -y curl python3 python3-pip python3-dev build-essential llvm-15 && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM base as cache
COPY . .
RUN bun install

WORKDIR /usr/src/app/server/telegram-proxy-server
ENV NODE_ENV=production
RUN bun install
RUN bun run build

# copy production dependencies and source code into final image
FROM base
COPY --from=cache /usr/src/app/server/telegram-proxy-server/package.json .
COPY --from=cache /usr/src/app/server/telegram-proxy-server/server.js .
COPY --from=cache /usr/src/app/node_modules ./node_modules

# run the app
USER bun
ENTRYPOINT [ "bun", "run", "server.js" ]
