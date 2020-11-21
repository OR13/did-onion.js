FROM node:12

WORKDIR /usr/src/app

EXPOSE 80

COPY ./package.json ./package.json
COPY ./.well-known ./.well-known
COPY ./index.html ./index.html
COPY ./server.js ./server.js

CMD [ "npm", "run", "start" ]