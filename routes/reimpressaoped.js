const express = require('express')
const router = express.Router()
const reimpressaopedController = require('../controllers/reimpressaoped-controller')


router.post('/obterqtdepedimpressos',
    reimpressaopedController.obterQtdePedImpressos
)

router.post('/obternumpedidos',
    reimpressaopedController.obterNumPedidos
)


router.post('/obterpedidosimpressos',
    reimpressaopedController.obterPedidoImpressos
)

//exporta o modulo router
module.exports = router




