# The official nodejs docker image
FROM node:9.3-alpine@sha256:7e3e0ccdc6c1f0d5f2fb806244431eff5e38cc8303433044c4a4fb36626e65ee

LABEL maintainer="epicallan.al@gmail.com"
# Copy package.json only to temp folder, install its dependencies,
# set workdir and copy the dependnecies there
RUN mkdir /src
# This way, dependnecies are cached without the need of cacheing all files.
ADD package.json /tmp/
RUN cd /tmp && npm install --silent
RUN cp -a /tmp/node_modules /src/

WORKDIR /src

# Copy the rest of the files to the container workdir
COPY . /src

RUN npm run build

ENV NODE_ENV='production'
ENV PORT=7777

EXPOSE ${PORT}

CMD ["npm", "start"]
