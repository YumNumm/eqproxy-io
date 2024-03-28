FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS build
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build

RUN pnpm --filter @eqproxy-io/dmdata-proxy deploy --prod deploy/dmdata-proxy

FROM base AS dmdata-proxy
COPY --from=build /app/deploy/dmdata-proxy/node_modules/ /app/deploy/dmdata-proxy/node_modules/
COPY --from=build /app/deploy/dmdata-proxy/dist/ /app/deploy/dmdata-proxy/dist/
COPY --from=build /app/deploy/dmdata-proxy/package.json /app/deploy/dmdata-proxy/package.json
WORKDIR /app/deploy/dmdata-proxy
EXPOSE 3000
CMD ["pnpm", "start"]

