const imovel = require("../models/imovelModel");

module.exports = {
  GetImoveis: async (req, res) => {
    try {
      const imoveis = await imovel.queryAllimoveis();
      res.status(200).send(imoveis);
    } catch (err) {
      res.status(500).send({ error: "Erro ao buscar os imóves no sistema", details: err });
    }
  },
  GetImovelById : async (req,res) =>{
    try{
        const id= req.params.id
        const imoveis = await imovel.queryImovelById(id);
        res.status(200).send(imoveis);
    } catch(err){
        res.status(500).send({ error: "Erro ao buscar os imóves no sistema", details: err });
    }
  },
  PostImovel : async (req,res) =>{
    try{
        const imovelData = req.body;
        const imoveis = await imovel.CreateImovel(imovelData);
        res.status(201).send(imoveis);
    }catch(err){
        res.status(500).send({ error: "Erro ao Criar o imóvel no sistema", details: err });
    }
  },
  PutImovel : async(req,res)=>{
    try{
        const imovelData = req.body;
        const imovelId = req.params.id;
        const imoveis = await imovel.UpdateImovel(imovelData,imovelId);
        res.status(201).send(imoveis);
    }catch(err){
        res.status(500).send({ error: "Erro ao Atualizar o imóvel no sistema", details: err });
    }
  },
  DelImovel : async(req,res)=>{
    try{
      const imovelId=req.params.id;

      const imoveis = imovel.DeleteteImovel(imovelId)
      res.status(200).send({message: 'Imovel Deletado!'});

    }catch(err){
      res.status(500).send({ error: "Erro ao Deletar o imóvel no sistema", details: err });
    }

  }
};
