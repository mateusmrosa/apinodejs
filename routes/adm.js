const express = require('express')
const router = express.Router()
const admController = require('../controllers/adm-controller')
const autenticacao = require('../middleware/autenticacao')


router.post('/',
    autenticacao.verifyJWT,
    admController.buscaDadosAdm
)

router.post('/obterdados',
    autenticacao.verifyJWT,
    admController.obterDados,
)

//exporta o modulo router
module.exports = router




