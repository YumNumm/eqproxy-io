FROM node:20-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN apk update
RUN apk add --no-cache libc6-compat curl
RUN npm install -g pnpm

FROM base AS builder
WORKDIR /app
RUN pnpm install -g turbo@^2
COPY . .
RUN turbo prune @eqproxy-io/dmdata-proxy --docker

FROM base AS installer

WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN pnpm install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

RUN pnpm turbo build

FROM base AS runner
WORKDIR /app

# Don't run production as root
RUN addgroup --system --gid 1001 js
RUN adduser --system --uid 1001 js
USER js
COPY --from=installer /app .

CMD node service/dmdata-proxy
