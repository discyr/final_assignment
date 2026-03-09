const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const todoRouter = require('./routes/todo.routes');
const dotenv = require('dotenv');
dotenv.config();
const app = express();

app.use(express.json());

db.connect((error)  => {
    if(error) {
        console.error('Connection failed.');
    } else {
        console.log('Connected to the database.');
    }
});


app.use('/todo', todoRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
});