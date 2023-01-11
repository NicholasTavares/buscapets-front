FROM node:16.15-alpine

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn install && yarn cache clean

ENTRYPOINT ["/entrypoint.sh"]
EXPOSE 80
