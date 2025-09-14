FROM node:20.19

WORKDIR /drivoxe-app

COPY . .

ENV PATH /node_modules/.bin:$PATH

COPY package.json ./**

COPY package-lock.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"] 