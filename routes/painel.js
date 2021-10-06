const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const painelController = require('../controllers/painel-controller')


router.post('/qtdeobjetos',
    //autenticacao.verifyJWT,
    painelController.obterQtdeObjetos
)


module.exports = router




