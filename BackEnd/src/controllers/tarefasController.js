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


module.exports = {
    getAlocacao,
    getAutoAloc,
};