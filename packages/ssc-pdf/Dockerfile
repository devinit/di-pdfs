# The official nodejs docker image
FROM node:9.4-alpine@sha256:9cd67a00ed111285460a83847720132204185e9321ec35dacec0d8b9bf674adf

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
