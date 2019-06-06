FROM node:8-slim

WORKDIR /nodeJS_test
ENV NODE_ENV development

COPY package.json /nodeJS_test/package.json

RUN npm install --production

COPY .env.example /nodeJS_test/.env.example
COPY . /nodeJS_test

CMD ["npm","start"]

EXPOSE 8080
