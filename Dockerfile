FROM node:16.13

RUN mkdir training-ts

WORKDIR /training-ts

COPY . /training-ts

RUN yarn install

RUN yarn run build

CMD [ "node" , "build/server.js" ]
