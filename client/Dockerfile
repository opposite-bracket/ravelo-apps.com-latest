# base image
FROM node:10.13.0

# set working directory
RUN mkdir /code
WORKDIR /code

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /code/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /code/package.json
RUN npm install --silent

# start app
CMD ["npm", "start"]