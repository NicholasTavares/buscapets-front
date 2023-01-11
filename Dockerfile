FROM node:18-alpine

WORKDIR /app

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN yarn

ENTRYPOINT ["/entrypoint.sh"]
