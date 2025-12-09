## Manual Installation
 - Install nodejs locally
 - Clone the repo
 - Install the dependencies (npm install)
 - Start the DB locally
    - docker run -e POSTGRES_PASSWORD=random -d -p 5432:5432 postgres
    - Or go to neon.tech and get u new DB url
 - Change the db file and update your db credentials
 - npx prisma migrate
 - npx prisma generate
 - npm run build
 - npm run start


## Docker Installation


## Docker Compose Installation