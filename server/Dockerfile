FROM node:10.12-alpine
WORKDIR /app
ADD package.json .
ADD yarn.lock .
RUN npm install -g -s --no-progress yarn
RUN yarn
ADD . .
HEALTHCHECK --interval=5s --timeout=3s CMD curl -f http://database:27017 || exit 1
CMD ["yarn", "dev", "|", "cat"]