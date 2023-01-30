const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const app = express();

// this line DATABASE suggestion
mongoose.set('strictQuery', false);
//Body parser
//app.use(bodyParser.json()); 
app.use(express.json());
// Moudel export
const PostRouter = require('./routes/post');
// Router Middalware
app.use('/',PostRouter);
app.use('/posts',PostRouter);
// app.use('/update/:_id',PostRouter);

//DB Connection
mongoose.connect(process.env.DB_CONNECTION , ()=>{
    console.log('DB Connection successfull!');
});
// Listen port
app.listen(3000);