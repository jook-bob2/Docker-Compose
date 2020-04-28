# base image 
FROM node:12.16.1-alpine

# set working directory 
WORKDIR /react 

# add `/app/node_modules/.bin` to $PATH 
ENV PATH /react/node_modules/.bin:$PATH 

# install and cache app dependencies 
COPY package.json /react/package.json 
RUN npm install --silent 
RUN npm install react-scripts@3.0.1 -g --silent 

# start app 
CMD ["npm", "start"]