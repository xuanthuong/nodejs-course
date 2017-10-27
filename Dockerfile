FROM node:boron

# Create app directory on container
WORKDIR /usr/src/app

# Install app dependencie
# . -> current directory /usr/src/app
COPY package.json .

RUN npm install

# Bundle app source from current directory on host to container
COPY . .

EXPOSE 8080

CMD ["npm", "run", "prod"]