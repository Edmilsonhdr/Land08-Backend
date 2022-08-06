class UsersController {
    create(req,res){
        const {name,email,senha}=req.body

        res.status(201).json({name,email,senha})
    }
}

module.exports= UsersController;