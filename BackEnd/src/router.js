const express = require('express');
const tarefasController = require('./controllers/tarefasController'); 


const router = express.Router();


router.get('/alocacao', tarefasController.getAlocacao);
router.get('/alocacao/:area', tarefasController.getAutoAloc);
router.get('/concessionaria/:id/:area', tarefasController.getConcessionarias);
router.get('/clientes', tarefasController.getClientes);
router.get('/quantidade/:id', tarefasController.updateQuantidade);


module.exports = router;