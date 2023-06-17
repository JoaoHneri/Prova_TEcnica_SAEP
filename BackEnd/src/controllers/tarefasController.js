const tarefasModel = require('../models/tarefasModel');


const getAlocacao = async (req, res)=>{
    const alocacao = await tarefasModel.getAlocacao();
    return res.status(200).json(alocacao)
};

const getAutoAloc = async (req, res)=>{
    const {area} = req.params;
    const room = await tarefasModel.getAutoAloc(area);
    return res.status(200).json(room)
    
};

const getConcessionarias = async (req, res)=>{
    const {id, area} = req.params;
    const concessionaria = await tarefasModel.getConcessionarias(id,area);
    return res.status(200).json(concessionaria)
};

const getClientes = async (req, res)=>{
    const clientes = await tarefasModel.getClientes();
    return res.status(200).json(clientes)
};


module.exports = {
    getAlocacao,
    getAutoAloc,
    getConcessionarias,
    getClientes
};