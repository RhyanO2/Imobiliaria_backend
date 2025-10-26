const pool = require("../config/database");

module.exports = {
  queryAllUsers: async (req, res) => {
    const [rows] = await pool.query("SELECT nome,email FROM Usuario");

    return rows;
  },
  queryUserById: async (userid) => {

    const [rows] = await pool.query("SELECT * FROM Usuario WHERE id=?",[userid]);

    return rows;
  },

  UpdateUserName: async (userdata, userid) => {
    const { nome } = userdata;

    const [rows] = await pool.query("UPDATE Usuario SET nome =? WHERE id=?", [
      nome,
      userid,
    ]);

    return rows;
  },

  UpdateUserEmail: async (userdata, userid) => {
    const { email } = userdata;

    const [rows] = await pool.query("UPDATE Usuario SET email =? WHERE id=?", [
      email,
      userid,
    ]);

    return rows;
  },

  DeleteUser: async (userid) => {
    const [rows] = await pool.query("DELETE FROM Usuario WHERE id=? ", [
      userid,
    ]);

    return rows;
  },
};
