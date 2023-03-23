const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());


const connectDB = require('./src/database/connectDB');
connectDB();

// route
const tagRoute = require('./src/routes/tagRoute');
app.use(tagRoute);



app.use('/',(req,res) => {
    res.send('this is a home server');
})

app.listen(8088,() => console.log('server listening'));