// include node fs module
var fs = require('fs');

exports.createUser = (req,res,next) => {
  const name = req.body.name;
  const lastName = req.body.lastName;
  const age = req.body.age;
  const email = req.body.email;
  const pass = req.body.pass;

  console.log(name ,lastName ,age ,email ,pass)

  const data = {
    name,
    lastName,
    age,
    email,
    pass,
  };

  
  fs.writeFile(  
    `./users/${name}-${Date.now().toString()}.txt`, 
    JSON.stringify(data),
    function (err) {
      if (err) throw err;
      console.log('Registro del usuario realizado correctamente');
    }
  ); 

  res.status(200).json({
    message: 'Usuario creado correctamente',
    id: Date.now(),
  });    
};

 
