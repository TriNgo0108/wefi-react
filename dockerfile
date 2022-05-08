# choose environment
FROM node:16.15.0 as development

#Add a work directory
WORKDIR /app

#copy package.json and install dependencies
COPY package.json .
RUN npm i

# COPY  app files
COPY . .

#Expose port
EXPOSE 3000

#
CMD ["npm","start"]