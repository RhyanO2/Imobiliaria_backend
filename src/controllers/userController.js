const usuario = require("../models/userModel");

module.exports = {
  GetUsers: async (req, res) => {
    try {
      const user = await usuario.queryAllUsers();
      res.status(200).send(user);
    } catch (err) {
      res.status(500).send({ error: "Erro ao buscar Usuários no sistema" });
    }
  },
  GetUserById: async (req, res) => {
    try {
      const userid = req.params.id;
      const user = await usuario.queryUserById(userid);
      res.status(200).send(user);
      console.log(user)
    } catch (err) {
      res.status(500).send({ error: "Erro ao buscar Usuário no sistema"});

    }
  },
  PutUserName: async (req, res) => {
    try {

        const userId = req.params.id;
        const userData = req.body;
        const user = await usuario.UpdateUserName(userData,userId)
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ error: "Erro ao Atualizar Nome do Usuário" });
        
    }
  },
  PutUserEmail: async (req, res) => {
     try {

        const userId = req.params.id;
        const userData = req.body;
        const user = await usuario.UpdateUserEmail(userData,userId);
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ error: "Erro ao Atualizar Email do Usuário" });
        
    }
  },
  DelUser: async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await usuario.DeleteUser(userId);
        res.status(200).send(user);
    } catch (err) {
        res.status(500).send({ error: "Erro ao Apagar Usuário" });
    }
  },
};
