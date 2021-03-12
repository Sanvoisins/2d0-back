import { PrismaClient } from '@prisma/client'
import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import Api from './routes/index';

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("tiny"));
const prisma = new PrismaClient()

// A `main` function so that you can use async/await
async function main() {
  app.use('/api', Api)
  app.listen(5000, () => console.log(`Running on port 5000`))
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
