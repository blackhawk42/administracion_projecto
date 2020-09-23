# We use debian as our base distro for this container.
FROM debian:jessie

# Refresh apt-get.
RUN apt-get update

# Install some utilities needed by node, npm.
RUN apt-get install -y curl make g++

# Install Node.js and npm.
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs

# Install required npm packages.
#ADD package.json /package.json
#ADD package-lock.json /package-lock.json
ADD ./ /
ADD shitty_server /shitty_server
RUN npm install

# Open up external access to port 80xx
EXPOSE  8082

# Run startup command.
CMD ["node", "/index.js"]
#CMD ["./shitty_server"]
