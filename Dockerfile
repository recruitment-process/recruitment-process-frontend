# build env
FROM node:18.16.0-alpine as build
ARG REACT_APP_API_URL
WORKDIR /app
RUN echo REACT_APP_API_URL=$REACT_APP_API_URL >> .env
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r build result_build
