const pedidosModels = require('../models/pedidos-models')
const itensPedidoModel = require('../models/itensPedido-models')
const lojaModels = require('../models/lojas-models')
const reimpressaoModels = require('../models/reimpressao-models')
const util = require('../util/validacoes')
const uUtil = require('../util/util')


exports.cadastro = async (req, res, next) => {
    try {
        const dados = req.body

        //const resultValidacoes = util.validaPedidos(dados)

        if (dados) {

            //busca do id da loja pela url da loja
            const resultLojIdPorUrl = await lojaModels.buscarIdPorUrl(dados.lojurl)

            const resultInserPedidos = await pedidosModels.cadastro(resultLojIdPorUrl[0].lojid, dados)

            if (resultInserPedidos.affectedRows > 0) {

                var itens = []
                itens = req.body.itens

                for (let i = 0; i < itens.length; i++) {

                    resultInsertItens = await itensPedidoModel.cadastro
                        (
                            resultInserPedidos.insertId, itens[i].prodid, itens[i].promoid,
                            itens[i].ite_qtde, itens[i].ite_valor_total
                        )
                }
                return res.status(200).json({ msg: 'Pedido inserido com sucesso!' })
            }
            else {
                return res.status(400).json({ msg: 'Algo deu errado no cadastro do pedido!' })
            }
        }
        else {
            return res.status(400).json({ resultValidacoes })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado aqui!", Erro: e })
    }
}

exports.obterStringPedido = async (req, res, next) => {
    try {
        var lojcodDigitado = req.body.lojcod

        var resultCodigoLoja = await lojaModels.obterCodigoLoja()

        //otimizar aqui...
        for (let i = 0; i < resultCodigoLoja.length; i++) {

            const lojcod = resultCodigoLoja[i].lojcod;

            if (lojcodDigitado == lojcod) {
                var resultLojaId = await lojaModels.obterIdPorCodLoja(lojcod)
            }
        }

        if (resultLojaId == undefined) {
            return res.status(404).json({ msg: "Código não existe!" })
        }

        resultStringPedido = await pedidosModels.obterStringPedido(resultLojaId[0].lojid)

        if (resultStringPedido.length > 0) {

            var pedidoid = resultStringPedido[0].pedid
            var lojaid = resultLojaId[0].lojid

            var resultFlagUpdateImpressao = await pedidosModels.updateFlagImpressao(
                resultLojaId[0].lojid, resultStringPedido[0].pedid
            )

            resultStringPedido = uUtil.remover_acentos_espaco(resultStringPedido[0].ped_string)

            var response = {
                flag_atualizada: resultFlagUpdateImpressao.affectedRows,
                resultStringPedido,
            }

            if (resultFlagUpdateImpressao.affectedRows > 0) {
                let dados = {
                    pedidoid,
                    lojaid,
                    resultStringPedido
                }
                console.log(dados)

                await reimpressaoModels.cadastro(dados)
            }

            return res.status(200).json({ response })

        } else {

            var response = {
                msg: 'Não existe pedido pendente!',
                resultStringPedido
            }

            console.log({ msg: 'Não existe pedido pendente' })
            return res.status(404).json({ response })
        }

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado aqui!", Erro: e }
    }
}

async function obterQtdePedidos(lojid) {
    try {
        const sql = `SELECT COUNT(pedid) AS total 
                     FROM pedidos
                     WHERE lojid = ? `
        const result = await mysql.execute(sql, [lojid])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdePedidos = obterQtdePedidos


async function obterQtdeTotPedidos() {
    try {
        const sql = `SELECT COUNT(pedid) AS total 
                     FROM pedidos`
        const result = await mysql.execute(sql)

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeTotPedidos = obterQtdeTotPedidos