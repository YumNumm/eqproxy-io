FROM node:20 AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

FROM base AS build
COPY . /usr/src/app
WORKDIR /usr/src/app
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
RUN pnpm run -r build
RUN pnpm deploy --filter=fcm-token-verify --prod /prod/server/fcm-token-verify
RUN pnpm deploy --filter=app2 --prod /prod/app2

FROM base AS fcm-token-verify
COPY --from=build /prod/server/fcm-token-verify /prod/server/fcm-token-verify
WORKDIR /prod/server/fcm-token-verify
EXPOSE 8000
CMD [ "pnpm", "start" ]