FROM node:latest
WORKDIR /app
EXPOSE 8000
COPY . .
RUN npm install
ENTRYPOINT node app.js