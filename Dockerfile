FROM alexknyazev/node-with-cli-server-helpers

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

CMD ["npm", "run", "start:prod"]
