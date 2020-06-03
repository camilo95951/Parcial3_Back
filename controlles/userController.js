exports.createUser = (req,res,next) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    const age = req.body.age;
    const email = req.body.email;
    const pass = req.body.pass;
    console.log(name ,lastName,age,email,pass);

    res.status(200).json({
        message: 'Usuario creado',
        post: {
          name,
          lastName,
          age,
          email,
          pass,
        }, 
    });    
};
