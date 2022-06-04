FROM node:17.5.0

#Create app directory
WORKDIR /app

#Install dependencies
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .

ENV PORT=8080
EXPOSE 8080

CMD [ "npm",  "start" ]