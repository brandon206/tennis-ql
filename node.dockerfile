FROM node:lts-alpine

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json'
ENV PATH src/frontend/node_modules/.bin:$PATH

COPY /src/frontend/package*.json ./

# install project dependencies
RUN npm install 
RUN npm install @vue/cli@3.7.0 -g

# copy project files and folders to current working directory (i.e. 'app' folder)
COPY ./src/frontend .

# build app for production with minification
# RUN npm start
CMD ["npm", "run", "serve"]