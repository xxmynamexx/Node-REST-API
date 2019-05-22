import express from 'express';
import db from './db';
import bodyParser from 'body-parser'
import router from './routes/index.js';
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 3000;
const IP = '127.0.0.1';


app.listen(PORT, IP, ()=>{
    console.log(`Server running on port: ${PORT}`)
})
