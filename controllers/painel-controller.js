const pedidosModels = require('../models/pedidos-models')
const painelModels = require('../models/painel-models')
const lojasModels = require('../models/lojas-models')


exports.obterQtdeObjetos = async (req, res, next) => {
    try {

        const resultCategorias = await painelModels.obterQtdeCategorias(req.body.usuid)

        const resultProdutos = await painelModels.obterQtdeProdutos(req.body.usuid)

        const resultAcrescimos = await painelModels.obterQtdeAcrescimos(req.body.usuid)

        const resultPromocoes = await painelModels.obterQtdePromocoes(req.body.usuid)

        const resultLojaId = await lojasModels.buscarId(req.body.usuid)

        const resultQtdePedidos = await pedidosModels.obterQtdePedidos(resultLojaId[0].lojid)

        const response = {
            categorias: resultCategorias[0].total,
            produtos: resultProdutos[0].total,
            acrescimos: resultAcrescimos[0].total,
            promocoes: resultPromocoes[0].total,
            pedidos: resultQtdePedidos[0].total
        }

        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
