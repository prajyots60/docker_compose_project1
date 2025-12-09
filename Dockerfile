FROM node:20-alpine
WORKDIR /app
COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./prisma ./prisma

RUN npm install

COPY . .
ENV DATABASE_URL="postgresql://postgres:supra@localhost:5432/postgres"
RUN npx prisma migrate dev
RUN npx prisma generate
RUN npm run build

CMD ["npm", "start"]