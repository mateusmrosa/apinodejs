const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const designController = require('../controllers/design-controller')


router.delete('/delete',
    autenticacao.verifyJWT,
    designController.delete
)

router.put('/atualizar',
    autenticacao.verifyJWT,
    designController.atualizar
)

router.post('/obter',
    autenticacao.verifyJWT,
    designController.obter
)

module.exports = router