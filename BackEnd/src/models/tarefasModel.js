const connection = require('./connection')

const getAlocacao = async ()=>{
    const [alocacao] = await connection.execute('SELECT * FROM alocacao');
    return alocacao;
};

const getAutoAloc = async (id)=>{
    const room = await connection.execute('select * from automoveis a inner join alocacao a2 where a.id = a2.automovel and a2.area = ?', [id])
    return room;
};


module.exports =  {
    getAlocacao,
    getAutoAloc,
};