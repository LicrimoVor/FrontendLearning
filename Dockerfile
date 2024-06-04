FROM node:17.4-alpine as build
WORKDIR '/app'

COPY ./package*.json ./
RUN npm install

COPY . .

RUN npm run build:prod
CMD rm /app/result/* ; cp -r /app/build/. /app/result/ ; npm run start:dev:server
