const reimpressaoModels = require('../models/reimpressao-models')


exports.obterQtdePedImpressos = async (req, res, next) => {
    try {

        let lojcod = req.body.lojcod

        const pedidosParaReimpressao = await reimpressaoModels.obterQtdePedImpressos(lojcod)

        console.log(pedidosParaReimpressao[0].total)

        const response = {
            pedidos: pedidosParaReimpressao[0].total,
            msg: "Total de pedidos para reimpressão"
        }

        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ mensagem: "Algo deu errado aqui!", Erro: e })
    }
}


exports.obterNumPedidos = async (req, res, next) => {
    try {
        const lojcod = req.body.lojcod

        const resultNumPedidos = await reimpressaoModels.obterNumPedidos(lojcod)

        console.log(resultNumPedidos)

        return res.status(200).json({
            numpedidos: resultNumPedidos.map(np => {
                return {
                    ped_cod: np.ped_cod,
                }
            })
        })

    } catch (e) {
        console.log(e)
        return res.status(500).json({ mensagem: "Algo deu errado aqui!", Erro: e })
    }
}


exports.obterPedidoImpressos = async (req, res, next) => {
    try {
        const dados = req.body

        const resultPedidosImpressos = await reimpressaoModels.obterPedidoImpressos(dados.lojcod, dados.ped_cod)

        console.log(resultPedidosImpressos.length)

        if (resultPedidosImpressos.length < 1) {
            return res.status(404).json({ msg: "Pedido não encontrado!" })
        }
        else {
            const response = { pedido: resultPedidosImpressos[0].imp_ped_string }
            return res.status(200).json({ response })
        }
    } catch (e) {
        console.log(e)
        return res.status(500).json({ mensagem: "Algo deu errado aqui!", Erro: e })
    }
}
