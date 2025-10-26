const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const pool = require("../config/database");

module.exports = {
  RegisterUser: async (authData) => {
    const { nome, email, senha } = authData;

    const hash = await bcrypt.hash(senha, 10);

    const [rows] = await pool.query(
      "INSERT INTO Usuario (nome,email,senha) VALUES (?,?,?)",
      [nome, email, hash]
    );
    console.log(hash)
    return rows;
  },

  LoginUser: async (authData) => {
    
      const { email, senha } = authData;

      const [rows] = await pool.query("SELECT * FROM Usuario WHERE email=?", [
        email,
      ]);
console.log(rows[0])
      if (rows.length === 0) {
        return { sucess: false, message: "Usuário não encontrado" };
      }

      const user = rows[0];

      const valid = await bcrypt.compare(senha, user.senha);
      if (!valid) {
        return { sucess: false, message: "Senha incorreta" };
      }

      delete user.senha;

      return { sucess: true, user };
      
    
  },
};
