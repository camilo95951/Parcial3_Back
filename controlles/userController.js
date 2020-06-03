exports.createUser = (req,res,next) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const Age = req.body.Age;
    const Email = req.body.Email;
    const Pass = req.body.Pass;

    const data = {
        name,
        lastName,
        Age,
        Email,
        Pass,
      };
/*  
fs.writeFile(`${Data.now().toString()}.txt`,'Learn Node F5 module', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
*/ 
  red.status(200).json({
    message: 'Usuario Creado',
    id: Date.now(),
});
};