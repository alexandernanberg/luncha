FROM node:6

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Node packages
ADD package.json /usr/src/app
RUN npm install --production -q

# Add app files
ADD . /usr/src/app

# Expose port
EXPOSE 8080

# Webpack
RUN npm run build

# Run server
CMD ["npm", "start"]
