<<<<<<< HEAD
FROM node:alpine
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
=======
FROM node:latest

WORKDIR /usr/src/app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]
>>>>>>> f4a8639394fa0dac7f47f05f4f20d6f64d438872
