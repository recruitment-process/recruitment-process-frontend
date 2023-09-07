# build env
FROM node:18.16.0-alpine as build
WORKDIR /app
RUN echo REACT_APP_API_URL=https://meetingroom.acceleratorpracticum.ru/api >> .env
COPY package*.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD cp -r build result_build
