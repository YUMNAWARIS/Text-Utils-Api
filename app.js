const express = require('express');
const bodyparser = require('body-parser');
const textRoutes = require('./routes/textRoutes');

const app = express();

app.use(bodyparser.json());
app.use("/text",textRoutes);

app.use("/", (req,res,next)=>{
    res.json({
        message:"Hello World! Everything is fine here..."
    });
});

app.listen(8080);