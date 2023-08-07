FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm init --y  && npm install express --save && npm i --S express pug && npm install mysql

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
