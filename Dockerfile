FROM node:8.10.0-alpine

RUN npm install -g serverless

WORKDIR /code/

COPY ./package.json /code/package.json

RUN npm install

COPY . /code/

EXPOSE 3000

CMD ["npm", "run", "dev"]