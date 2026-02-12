import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'
import cors from 'cors';
import Register from './models/Register.js';

dotenv.config();

const app = express()
app.use(cors());
app.use(express.json());
const url = process.env.DB_URI;
const client = new MongoClient(url);
const dbName = 'Login Page';

async function main() {
  
  await client.connect();
  console.log('✅ MongoDb Connected successfully');
  return 
}

main()
.then(console.log)
.catch(console.error)


app.get('/', (req,res) => {
    res.send("Server is up and running")
})

app.post("/signup", async (req,res) =>{
    const { name, email, password } = req.body;
    const newUser = new Register({ name, email, password });
    await newUser.save();
    res.send("user received")
})

app.listen(3000,(req, res) => {
    console.log(`App running on https://localhost:3000`)
}) 

