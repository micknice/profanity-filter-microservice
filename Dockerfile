FROM node:15
WORKDIR /profanity-filter-microservice
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 9090
EXPOSE $PORT
CMD ["node", "listen.js"]