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
 - Create a Network
    - `docker network create user_net`
 - Start the DB 
    - `docker run --network user_net --name postgres -e POSTGRES_PASSWORD=supra -d -p 5432:5432 postgres`
 - Build the Image
    - `docker build --network=host -t user_project .`
 - Start the Image
    - `docker run -e DATABASE_URL=postgresql://postgres:supra@postgres:5432/postgres --network user_net -p 3000:3000 user_project`


## Docker Compose Installation
 - Install docker , docker compose
 - Run
    - `docker compose up`