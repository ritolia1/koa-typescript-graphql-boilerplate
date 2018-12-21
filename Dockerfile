# Import node image from dockerhub.io
FROM mhart/alpine-node:8.11.2

# Create app directory
WORKDIR /usr/src/koa-typescript-graphql-boilerplate

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Application default port
EXPOSE 3000

# Command
CMD [ "npm", "run", "prod-start" ]
