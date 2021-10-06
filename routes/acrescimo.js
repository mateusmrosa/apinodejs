const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const acrescimoController = require('../controllers/acrescimo-controller')


router.post('/cadastro',
    autenticacao.verifyJWT,
    acrescimoController.cadastro
)

router.put('/atualizar',
    autenticacao.verifyJWT,
    acrescimoController.atualizar
)

router.delete('/delete/:acrid',
    autenticacao.verifyJWT,
    acrescimoController.delete
)

router.post('/obteracrescimo',
    autenticacao.verifyJWT,
    acrescimoController.obter
)



router.put('/updatedispacrescimo',
    autenticacao.verifyJWT,
    acrescimoController.updateDisponibilidade
)


//exporta o modulo router
module.exports = router




