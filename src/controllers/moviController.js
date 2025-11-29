const movi = require('../models/moviModel');

module.exports = {

GetMovimentacoes: async(req,res)=>{
try {
    const results =await movi.queryAllmovimentacoes();
    res.status(200).send(results);

} catch (err) {
    res.status(500).send('Erro ao buscar as movimentações do banco de dados');
    console.log(err);
    
}


},

CreateMovimentacao: async(req,res)=>{
    try {
        const moviData = req.body;
        await movi.CreateMovimentacao(moviData);
        res.status(201).send('Movimentação criada com sucesso!');
    } catch (err) {
         res.status(500).send('Erro ao criar movimentações do banco de dados');
    console.log(err);
        
    }


},
PutMovimentacao: async(req,res)=>{
    try {
        const moviId= req.params.id;
        const moviData = req.body;
        await movi.UpdateMovimentacao(moviId, moviData);
        res.status(200).send('Movimentação atualizada com sucesso!');
    } catch (err) {
        res.status(500).send('Erro ao atualizar movimentações do banco de dados');
        console.log(err);
    }


},

DeleteMovimentacao: async(req,res)=>{
try {
    const moviId= req.params.id;
    await movi.DeleteMovimentacao(moviId);
    res.status(200).send('Movimentação deletada com sucesso!');
} catch (err) {
    res.status(500).send('Erro ao deletar movimentações do banco de dados');
    console.log(err);
}

}

}