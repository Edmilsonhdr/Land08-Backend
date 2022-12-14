const AppError = require("../Utils/AppError")

class UsersController {
    create(req,res){
        const {name,email,senha}=req.body

        if(!name){
            throw new AppError("Nome é obrigatorio")
        }

        res.status(201).json({name,email,senha})
    }
}

module.exports= UsersController;