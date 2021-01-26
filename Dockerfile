FROM mcr.microsoft.com/playwright:bionic

WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app
RUN npm ci --production

COPY ./src /app/src

CMD ["npm", "start"]
