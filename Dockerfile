FROM node:18-alpine
WORKDIR /usr/buscapets

ADD . .
RUN yarn && yarn cache clean