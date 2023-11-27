ARG NODE_VERSION=20.1.0

# 依存パッケージのインストール
FROM node:${NODE_VERSION} as deps
WORKDIR /app
# packeg.jsonとpackage-lock.jsonのみコピーする
COPY package*.json ./
RUN yarn install

# Build環境
FROM node:${NODE_VERSION} as builder
WORKDIR /app
COPY . .
# depsステージでインストールしたパッケージをコピーする
COPY --from=deps /app/node_modules ./node_modules
RUN yarn build

# 実行環境
FROM node:${NODE_VERSION}
ENV TZ=Asia/Tokyo
WORKDIR /app

ARG USER_NAME=app
RUN adduser ${USER_NAME} && \
  chown -R ${USER_NAME} /app
USER ${USER_NAME}

ENV NODE_ENV production
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/sample ./sample

ENV NEW_RELIC_DISTRIBUTED_TRACING_ENABLED=true \
    NEW_RELIC_LOG=stdout

# COPY CREDENTIAL
CMD [ "yarn", "start" ]