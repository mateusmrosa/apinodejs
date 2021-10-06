const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const promocoesController = require('../controllers/promocoes-controller')


router.post('/cadastro',
    autenticacao.verifyJWT,
    promocoesController.cadastro
)

router.post('/obterpromocao',
    autenticacao.verifyJWT,
    promocoesController.obterpromocao
)

router.put('/atualizar',
    autenticacao.verifyJWT,
    promocoesController.atualizar
)

router.delete('/delete/:promoid',
    autenticacao.verifyJWT,
    promocoesController.delete
)


router.put('/updatedisppromocao',
    autenticacao.verifyJWT,
    promocoesController.updateDispPromocao
)

module.exports = router