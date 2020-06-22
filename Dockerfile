FROM node:13.8

WORKDIR /usr/src/app

COPY . .

RUN npm install --unsafe-perm

EXPOSE 3000

CMD ["npm", "run", "dev"]