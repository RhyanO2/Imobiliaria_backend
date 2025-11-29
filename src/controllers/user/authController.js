const auth = require('../models/authModel');
const user = require('../models/userModel')

module.exports ={
    RegisterUser : async(req,res) =>{
        try {
            const authData = req.body;
            const register = await auth.RegisterUser(authData);
            res.status(201).send(register);
        } catch (err) {
            res.status(500).send({ error: "Erro ao Registrar Usuário no sistema" });
        }

        
        
    },
    LoginUser : async(req,res) =>{
        try{
            const userData = req.body;
            const login = await auth.LoginUser(userData);
            res.status(200).send({message: 'Usuário Logado!'})
        }catch(err){
            res.status(500).send({ error: "Erro ao Logar Usuário no sistema" });
            console.log(err)
        }

        
    
    }


}