import { PrismaClient } from "@prisma/client";
import express from "express";

const app = express();

const prismaClient = new PrismaClient();

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