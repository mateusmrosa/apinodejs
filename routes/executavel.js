const express = require('express')
const router = express.Router()
const executavelController = require('../controllers/executavel-controller')
//const autenticacao = require('../middleware/autenticacao')


router.post('/downloadmobile',
    //autenticacao.verifyJWT,
    executavelController.downloadMobile
)

router.post('/downloadesktop',
    //autenticacao.verifyJWT,
    executavelController.downloadDesktop
)

//exporta o modulo router
module.exports = router




