const express = require('express');
const tarefasController = require('./controllers/tarefasController'); 


const router = express.Router();


router.get('/alocacao', tarefasController.getAlocacao);
router.get('/alocacao/:area', tarefasController.getAutoAloc);


module.exports = router;