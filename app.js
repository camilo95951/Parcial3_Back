const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const userRoute = require('./routes/userRoute');
const db = require('./infras/configDB');

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

db.initDb();

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'OPTIONS, GET, POST, PUT, PATCH, DELETE'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(bodyParser.json());

//create-crear
//read-leer
//readid-leer por id
//update-actualizar
//delete-borrar

app.use(userRoute);

app.use('/', (req, res, next) => {
  res.status(200).json({ app: 'La aplicacion esta ok!'});
});

var server = app.listen(process.env.PORT || 8080, () => {
  console.log(`Servidor iniciado en el puerto ${process.env.PORT || 8080}`);
});
