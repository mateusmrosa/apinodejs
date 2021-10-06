const lojasModels = require('../models/lojas-models')
const acrescimoModels = require('../models/acrescimo-models')
const util = require('../util/validacoes')


exports.cadastro = async (req, res, next) => {
    try {
        const idLoja = await lojasModels.buscarId(req.body.usuid)

        const { usuid, catprodid, acrnome, acrvalor, status } = req.body

        const dados = req.body

        const resultValidacao = util.validaAcrescimo(dados)

        if (resultValidacao.retorno) {

            const resulCadastro = await acrescimoModels.cadastrar(dados, idLoja)

            const response = {
                msg: 'Acrescimo inserido com sucesso',
                acrid: resulCadastro.insertId,
            }

            return res.status(201).json({ response })
        }
        else
            return res.status(400).json({ resultValidacao })


    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.atualizar = async (req, res, next) => {
    try {
        const { usuid, acrnome, acrvalor, status, acrid } = req.body

        const dados = req.body

        const resultValidacao = util.validaAcrescimo(dados)

        if (resultValidacao.retorno) {

            const resulCadastro = await acrescimoModels.atualizar(dados)

            const response = {
                update: resulCadastro.affectedRows,
                acrid: dados.acrid,
                msg: 'Acrescimo atualizado com sucesso!'
            }
            return res.status(201).json({ response })
        }
        else
            return res.status(400).json({ resultValidacao })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.delete = async (req, res, next) => {
    try {
        const resultDelete = await acrescimoModels.deletar(req.params.acrid)

        const response = {
            delete: resultDelete.affectedRows,
            acrid: req.params.acrid,
            msg: 'Acrescimo deletado com sucesso!'
        }

        return res.status(202).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.obter = async (req, res, next) => {
    try {
        const resultado = await acrescimoModels.obter(req.body.usuid)

        if (resultado.length == 0) {
            const response = { msg: 'Não existe nemhum acrescimo!' }
            return res.status(404).json({ response })
        }

        const response = {
            acrescimos: resultado.map(acres => {
                return {
                    acrid: acres.acrid,
                    usuid: acres.usuid,
                    catprodid: acres.catprodid,
                    catprodnome: acres.catprodnome,
                    acrnome: acres.acrnome,
                    acrvalor: acres.acrvalor,
                    status: acres.status
                }
            })
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.updateDisponibilidade = async (req, res, next) => {
    try {
        const resultado = await acrescimoModels.updateDisponibilidade(req.body.status, req.body.acrid)

        const response = {
            mensagem: "Disponibilidade do acrescimo foi alterada!",
            statusAtualizado: {
                resultado: resultado.affectedRows,
                status: req.body.status,
            }
        }
        return res.status(400).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}