import dotenv from 'dotenv'
import express, { Express, Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors'
import mongoose from 'mongoose'
import { createServer } from 'node:http'
const port = 4001

import userRouter from './routs/user/userRouts'
import libraryRouter from './routs/library/libraryRouts'

dotenv.config()
const app = express()
const server = createServer(app)
import bodyParser from 'body-parser'

const corsOptions = {
  origin: ['http://localhost:5173', 'http://192.168.0.242:5173'],
  methods: [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'CONNECT',
    'OPTIONS',
    'TRACE',
    'PATCH',
  ],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}

app.use(cors(corsOptions))
server.listen(port, () => {
  console.log(`server running at http://localhost:${port}`)
})

// app.use(bodyParser.json());
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack); // Log the error (optional, but helpful)
  res.status(500).send(`Internal Server Error: ${err.message}`);
});

const url = process.env.DATABASE_URL
if (!url) {
  throw new Error('No DATABASE_URL provided.')
}

try{
  const prisma = new PrismaClient();
  console.log("Prisma client created successfully");
} catch (error) {
  console.log("Prisma client creation failed");
  console.error(error);
}



app.use(bodyParser.json())
app.use('/user', userRouter)
app.use('/library', libraryRouter)
