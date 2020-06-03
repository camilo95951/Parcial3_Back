exports.createUser = (req,res,next) => {
    const name = req.body.name;
    const lastName = req.body.lastName;
    console.log(name ,lastName);

    res.status(200).json(
        {
            message: 'Usuario creado',
            post: {
                name,
                lastName,
            } 
        }
    );
    
};
