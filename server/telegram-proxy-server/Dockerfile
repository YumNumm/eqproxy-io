# use the official Bun image
# see all versions at https://hub.docker.com/r/oven/bun/tags
FROM oven/bun:1-slim as base
WORKDIR /usr/src/app
# Install curl
RUN apk update && \
    apk add curl build-base git linux-headers \
    python3 python3-dev py3-pip \
    python3-dev && pip3 install --upgrade pip

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
