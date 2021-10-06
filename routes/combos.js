const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const combosController = require('../controllers/combos-controller')


router.post('/obtercombospromocao',
    autenticacao.verifyJWT,
    combosController.obtercombospromocao
)

module.exports = router