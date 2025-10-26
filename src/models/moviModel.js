const pool = require('../config/database');

module.exports = {
    queryAllmovimentacoes : async(req,res) =>{
        const [rows] = await pool.query('SELECT * FROM Movimentacao');

        return rows;
    },

    queryMovimentacaoById : async(id) =>{
        const [rows] = await pool.query('SELECT * FROM Movimentacao WHERE id=?',[id]);

        return rows;


    },
    CreateMovimentacao : async(moviData) =>{
        const {status,id_usuario} = moviData

        const [rows] = await pool.query('INSERT INTO Movimentacao (status,id_usuario) VALUES (?,?)',[status,id_usuario]);

        return rows;
    },
    UpdateMovimentacao : async(moviData) =>{
        const {status,id_usuario} = moviData

        const [rows] = await pool.query('UPDATE Movimentacao SET (status,id_usuario) VALUES (?,?)',[status,id_usuario]);

        return rows;
    },
    DeleteteMovimentacao : async(id) =>{
        

        const [rows] = await pool.query('DELETE FROM Movimentacao WHERE id=?',[id]);

        return rows;
    }

}