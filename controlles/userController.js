const conectdb = require('../infras/configDB');
var fs = require('fs');
exports.createUser = (req, res, next) => {
  const name = req.body.name;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const email = req.body.email;
  const pass = req.body.pass;
  console.log(name, lastName, age, email, pass);
  const data = {
    name,
    lastName,
    age,
    email,
    pass,
  };
  conectdb.pool.query(
    'INSERT INTO usuario(name, lastName, age, email, pass) VALUES ($1, $2, $3, $4, $5) ',
    Object.values(data),
    (error, resp) => {
      if (error) {
        res.status(400).json({
          message: 'El usuario no pudo ser creado',
          id: Date.now(),
        });
      }
      res.status(200).json({
        message: 'Usuario creado correctamente',
        user: resp,
        id: Date.now(),
      });
    }
  );
};
exports.readUserById = (req, res, next) => {
  const userId = req.params.id;

  conectdb.pool.query(
    'SELECT * FROM usuario WHERE userid = $1',
    [userId],
    (error, results) => {
      if (error) {
        res.status(400).json({
          message: 'El usuario no pudo ser encontrado',
          id: Date.now(),
        });
      }
      res.status(200).json(results.rows);
    }
  );
};

exports.readUser = (req, res, next) => {
  conectdb.pool.query('SELECT * FROM usuario', (error, results) => {
    if (error) {
      res.status(400).json({
        message: 'El usuario no pudo ser encontrado',
        id: Date.now(),
      });
    }
    res.status(200).json(results.rows);
  });
};
