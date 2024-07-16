FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apt-get update && \
    apt-get install -y curl python3 python3-pip python3-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

FROM base AS build
COPY . /usr/src/app
ENV NODE_ENV=production
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm install -g typescript
RUN pnpm run -r build
RUN pnpm deploy --filter=fcm-token-verify --prod /prod/server/fcm-token-verify
RUN pnpm deploy --filter=dmdata-proxy --prod /prod/dmdata-proxy
RUN pnpm deploy --filter=eqproxy-io --prod /prod/eqproxy-io
RUN pnpm deploy --filter=notification-producer --prod /prod/notification-producer
RUN pnpm deploy --filter=notification-worker --prod /prod/notification-worker

ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
    NEW_RELIC_LOG=stdout

FROM base AS fcm-token-verify
COPY --from=build /prod/server/fcm-token-verify /prod/server/fcm-token-verify
WORKDIR /prod/server/fcm-token-verify
EXPOSE 8000
ENV NEW_RELIC_APP_NAME="fcm-token-verify"
CMD [ "pnpm", "start" ]

FROM base AS dmdata-proxy
COPY --from=build /prod/dmdata-proxy /prod/dmdata-proxy
WORKDIR /prod/dmdata-proxy
ENV NEW_RELIC_APP_NAME="dmdata-proxy"
CMD [ "pnpm", "start" ]

FROM base AS eqproxy-io
COPY --from=build /prod/eqproxy-io /prod/eqproxy-io
WORKDIR /prod/eqproxy-io
ENV NEW_RELIC_APP_NAME="eqproxy-io"
CMD [ "pnpm", "start" ]

FROM base AS notification-producer
COPY --from=build /prod/notification-producer /prod/notification-producer
WORKDIR /prod/notification-producer
ENV NEW_RELIC_APP_NAME="notification-producer"
CMD [ "pnpm", "start" ]

FROM base AS notification-worker
COPY --from=build /prod/notification-worker /prod/notification-worker
WORKDIR /prod/notification-worker
ENV NEW_RELIC_APP_NAME="notification-worker"
CMD [ "pnpm", "start" ]
