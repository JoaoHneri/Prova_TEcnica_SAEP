const connection = require('./connection')

const getAlocacao = async ()=>{
    const [alocacao] = await connection.execute('SELECT * FROM alocacao');
    return alocacao;
};

const getAutoAloc = async (id)=>{
    const [room] = await connection.execute('select * from automoveis a inner join alocacao a2 where a.id = a2.automovel and a2.area = ?', [id])
    return room;
};

const getConcessionarias = async (id, area)=>{
    const [concessionaria] = await connection.execute('select c.concessionaria, a2.modelo  from concessionaria c inner join alocacao a inner join automoveis a2 where  c.id = a.concessionaria and a2.id = a.automovel and a.automovel = ? and a.area = ?', [id, area]);
    return concessionaria;
};

const getClientes = async () => {
    const [clientes] = await connection.execute('select * from clientes');
    return clientes;
};


module.exports =  {
    getAlocacao,
    getAutoAloc,
    getConcessionarias,
    getClientes
};