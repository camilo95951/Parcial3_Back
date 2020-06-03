const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute')

const 

if (process.env.NODE_ENV !== 'production'){
    dotenv.config();

}

const app = express();
app.use(bodyParser.json());

app.use(userRoute);

var server = app.listen(process.env.PORT || 8080, () => {
    console.log('Servidor iniciaco en el puerto${process.env.PORT  || 8080}'
    );

});

