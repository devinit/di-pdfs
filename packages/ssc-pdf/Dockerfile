# The official nodejs docker image
FROM node:9.8-alpine@sha256:fb280a790a6fd3fff5c15af8dc3d58cac1abba9fad0b82bdf6657ab044d77f19

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
