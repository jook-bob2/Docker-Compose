# base image 
# FROM node:12.16.1-alpine
FROM node:12.2.0-alpine

# set working directory 
# WORKDIR /react 
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH 
ENV PATH /app/node_modules/.bin:$PATH 

# ARG REACT_APP_API_BASE_URL
# ENV REACT_APP_API_BASE_URL = ${REACT_APP_API_BASE_URL}

# install and cache app dependencies 
# COPY package*.json ./
COPY package.json /app/package.json

#RUN npm cache clean --force
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
# COPY . .

# start app 
CMD ["npm", "start"]