const designModels = require('../models/design-models')


exports.delete = async (req, res, next) => {
    try {
        const resultado = await designModels.validaExistente(req.body.desid)

        if (resultado.length == 0) {
            return res.status(404).json({ msg: 'Esse design não existe!' })
        }
        else {
            const resultado = await designModels.deletar(req.body.desid)
            const response = {
                mensagem: "Design deletado com sucesso!",
                resultado: resultado.affectedRows
            }
            return res.status(200).json({ response })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.atualizar = async (req, res, next) => {
    try {
        const { desid, usuid, descorpadrao, descorsecundaria } = req.body

        const dados = req.body

        const resultado = await designModels.atualizar(dados)

        const response = {
            resultado: resultado.affectedRows,
            mensagem: "Design alterado com sucesso!",
            desid: req.body.desid,
            lojid: req.body.lojid,
            descorpadrao: req.body.descorpadrao,
            descorsecundaria: req.body.descorsecundaria,
        }

        return res.status(202).json({ response })

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}

exports.obter = async (req, res, next) => {
    try {
        const resultado = await designModels.obter(req.body.usuid)

        if (resultado.length > 0) {
            const design = {
                resultado: resultado.map(d => {
                    return {
                        desid: d.desid,
                        usuid: d.usuid,
                        lojid: d.lojid,
                        descorpadrao: d.descorpadrao,
                        descorsegundaria: d.descorsegundaria,
                        descorterciaria: d.descorterciaria,
                    }
                })
            }
            return res.status(200).json({ design })
        }
        else
            return res.status(404).json({ msg: 'Não existe design para essa loja' })
    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}

