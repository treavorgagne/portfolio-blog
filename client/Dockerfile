FROM node:17.5.0

#Create app directory
WORKDIR /app

#Install dependencies
COPY package*.json ./
RUN npm install

#Bundle app source
COPY . .

ENV PORT=3000
EXPOSE 3000

CMD [ "npm",  "start" ]