FROM node:22.16.0-alpine3.19
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./prisma ./prisma

RUN npm install

COPY . .
ENV DATABASE_URL="postgresql://postgres:supra@localhost:5432/postgres"
RUN npx prisma migrate dev --name init --skip-seed
RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]