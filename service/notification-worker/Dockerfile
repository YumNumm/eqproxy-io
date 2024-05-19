FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app
# Install curl
RUN apt-get update && \
    apt-get install -y curl python3 python3-pip && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM base AS build
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build

RUN pnpm --filter @eqproxy-io/notification-worker deploy --prod deploy/notification-worker

FROM base AS dmdata-proxy
COPY --from=build /app/deploy/notification-worker/node_modules/ /app/deploy/notification-worker/node_modules/
COPY --from=build /app/deploy/notification-worker/dist/ /app/deploy/notification-worker/dist/
COPY --from=build /app/deploy/notification-worker/package.json /app/deploy/notification-worker/package.json
WORKDIR /app/deploy/notification-worker
ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
    NEW_RELIC_LOG=stdout \
    NODE_ENV=production
CMD ["pnpm", "start"]

