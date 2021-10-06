const express = require('express')
const router = express.Router()
const pedidosController = require('../controllers/pedidos-controller')


router.post('/cadastro',
    pedidosController.cadastro
)


router.post('/obterstringpedido',
    pedidosController.obterStringPedido
)

//exporta o modulo router
module.exports = router




