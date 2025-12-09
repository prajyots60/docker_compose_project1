import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import express from "express";

const app = express();

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prismaClient = new PrismaClient({ adapter });

app.get('/', async (req, res) => {
    const data = await prismaClient.user.findMany();
    res.json({data});
    res.send('Hello World! from get');
})

app.post('/', async (req, res) => {
    await prismaClient.user.create({
        data: {
            username: Math.random().toString(),
            password: 'password123'
        }
    })
    res.send('Hello World! from post');
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});