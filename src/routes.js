const express = require('express');
const router = express.Router();

const CadastroController = require('./controllers/CadastroController');

router.get('/cadastro', CadastroController.buscarTodos);
router.post('/cadastro', CadastroController.inserir);
router.put('/cadastro/:idcadastro', CadastroController.alterar);

module.exports = router;

