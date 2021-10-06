const express = require('express')
const router = express.Router()
const cdController = require('../controllers/cd-controller')
const acrescimoController = require('../controllers/acrescimo-controller.js')
const produtoController = require('../controllers/produtos-controller.js')
const lojasController = require('../controllers/lojas-controller.js')


router.post('/cardapio',
    cdController.obterInforCardapio
)


router.post('/acrescimoporcategoriacardapio',
    cdController.acrescimoPorCategoriaCardapio
)


router.post('/prodporcategoriacardapio',
    produtoController.produtosPorCategoriaCardapio
)


router.post('/horarioFuncionamento',
    lojasController.horarioFuncionamento
)

//exporta o modulo router
module.exports = router




