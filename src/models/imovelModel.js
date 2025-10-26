const pool = require('../config/database');

module.exports = {
    queryAllimoveis : async(req,res) =>{
        const [rows] = await pool.query('SELECT * FROM Imovel');

        return rows;
    },

    queryImovelById : async(id) =>{
        const [rows] = await pool.query('SELECT * FROM Imovel WHERE id=?',[id]);

        return rows;


    },
    CreateImovel : async(imovelData) =>{
        const {tipo,endereco,cep,numero} = imovelData;

        const [rows] = await pool.query('INSERT INTO Imovel (tipo,endereco,cep,numero) VALUES (?,?,?,?)',[tipo,endereco,cep,numero]);

        return rows;
    },
    UpdateImovel : async(imovelData,imovelId) =>{
        const {tipo,endereco,cep,numero} = imovelData;
        const update = 'UPDATE Imovel SET tipo=?, endereco=?,cep=?,numero=? WHERE id=?';

        const [rows] = await pool.query(update,[tipo,endereco,cep,numero,imovelId]);

        return rows;
    },
    DeleteteImovel : async(id) =>{
        

        const [rows] = await pool.query('DELETE FROM Imovel WHERE id=?',[id]);

        return rows;
    }

}