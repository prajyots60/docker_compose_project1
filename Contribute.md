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
 - Install Docker
 - Start the DB 
    - docker run -e POSTGRES_PASSWORD=random -d -p 5432:5432 postgres
 - Build the Image
    - `docker build -t user_project .`
 - Start the Image
    - `docker run -p 3000:3000 user-project`


## Docker Compose Installation
 - Install docker , docker compose
 - Run
    - `docker-compose up`