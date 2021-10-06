const promocoesModels = require("../models/promocoes-models")
const combosModels = require("../models/combos-models")
const util = require("../util/validacoes")
const imagensModels = require("../models/imagens-models")


exports.cadastro = async (req, res, next) => {
    try {
        const { usuid, promonome, promovalortotal, promodescricao, status, prodid, comqtde } = req.body

        const dados = req.body

        console.log(dados.combo[0].prodid)

        if (
            dados.usuid != '' || dados.promonome != '' || dados.promovalortotal != '' || dados.promodescricao != '' ||
            dados.status != '' || dados.combo[0].prodid != '' || dados.combo[0].comqtde != ''
        ) {

            const resultIdLoja = await promocoesModels.obterIdLoja(req.body.usuid)

            const resultValidacoesPromocao = util.validaPromocao(dados)

            if (resultValidacoesPromocao.retorno) {

                const resultInsertPromocao = await promocoesModels.insertPromocao(resultIdLoja[0].lojid, req.body)

                if (resultInsertPromocao.affectedRows > 0) {

                    console.log(resultInsertPromocao.affectedRows)

                    var combo = []
                    combo = req.body.combo

                    for (let i = 0; i < combo.length; i++) {

                        console.log("qtde: " + combo[i].comqtde.toString().length)

                        //foi validado aqui pq que o array precisa do loop e uma validação fora daria mais trabalho
                        if (combo[i].comqtde.toString().length > 19 || combo[i].comqtde.toString().length == 0) {

                            return res.status(400).json({
                                msg: 'Qtde do combo invalida',
                                retorno: false
                            })
                        }
                        else {
                            await combosModels.insertCombo(resultInsertPromocao.insertId, combo[i].prodid, combo[i].comqtde)
                        }
                    }
                    const response = {
                        promoçãoCriada: {
                            msg: 'Promoção cadastrada com sucesso!',
                            promoid: resultInsertPromocao.insertId,
                        }
                    }
                    return res.status(201).send({ response })
                }
                else
                    return res.status(400).json({ resultValidacoesCombo })
            } else {
                console.log(resultInsertPromo.affectedRows)
                const response = { msg: "Algo deu errado no cad da promoção!" }
                return res.status(400).send({ response })
            }
        } else {
            console.log(dados)
            const response = { msg: "json nao pode estar vazio!" }
            return res.status(400).send({ response })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}

exports.obterpromocao = async (req, res, next) => {
    try {
        const resultSelectPromocao = await promocoesModels.obterPromocao(req.body.usuid)

        return res.status(200).json({
            promocoes: resultSelectPromocao.map(p => {
                return {
                    promoid: p.promoid,
                    promonome: p.promonome,
                    prodnome: p.prodnome,
                    promodescricao: p.promodescricao,
                    promovalortotal: p.promovalortotal,
                }
            })
        })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.atualizar = async (req, res, next) => {
    try {
        const dados = req.body

        const resultValidacoesPromocao = util.validaPromocao(dados)

        if (resultValidacoesPromocao.retorno) {

            const resultUpdatePromocoes = await promocoesModels.atualizar(dados)

            console.log(resultUpdatePromocoes)

            if (resultUpdatePromocoes.affectedRows > 0) {

                combos = req.body.combos

                for (let c of combos) {

                    if (c.comqtde.toString().length > 19 || c.comqtde.toString().length == 0) {

                        return res.status(400).json({
                            msg: 'Qtde do combo invalida',
                            retorno: false
                        })
                    }
                    else {
                        var resultUpdateCombo = await combosModels.atualizar(c)

                        console.log(c.comqtde)
                    }
                }

                const response = {
                    promocaoCombosAtualizada: {
                        msg: 'Combbos e Promoção atualizados com retorno!',
                        resultadoPromocao: resultUpdateCombo.affectedRows,
                        resultadoCombos: resultUpdatePromocoes.affectedRows,
                        usuid: dados.usuid,
                        promoid: dados.promoid,
                        promonome: dados.promonome,
                        promodescricao: dados.promodescricao,
                        promovalortotal: dados.promovalortotal,
                        combos: [
                            {
                                combos: req.body.combos
                            }
                        ]
                    }
                }
                return res.status(200).send({ response })
            } else
                return res.status(500).json({ mensagem: "Algo deu errado no update da promoção!" })
        } else
            return res.status(400).json({ resultValidacoesPromocao })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}

exports.delete = async (req, res, next) => {
    try {
        resultDelCombo = await combosModels.deleteCombo(req.params.promoid)

        if (resultDelCombo.affectedRows > 0) {

            resultDelImgPromo = await imagensModels.deleteImagemPromocao(req.params.promoid)

            if (resultDelImgPromo.affectedRows > 0) {

                resultDelPromoId = await promocoesModels.deletePromocaoPorId(req.params.promoid)

                if (resultDelPromoId.affectedRows > 0) {

                    const response = {
                        linhas_afetadas_combo: resultDelCombo.affectedRows,
                        linhas_afetadas_imgpromocao: resultDelImgPromo.affectedRows,
                        linhas_afetadas_promocao: resultDelPromoId.affectedRows,
                        msg: "Promoção deletada com sucesso!"
                    }
                    console.log(resultDelCombo)
                    console.log(resultDelImgPromo)
                    console.log(resultDelPromoId)

                    return res.status(200).json({ response })
                }
                else
                    return res.status(500).json({ msg: 'Erro ao deletar promoção!' })
            }
            else
                return res.status(500).json({ msg: 'Erro ao deletar imagem da promoção!' })
        }
        else
            return res.status(500).json({ msg: 'Erro ao deletar Combo!' })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.updateDispPromocao = async (req, res, next) => {
    try {
        const resultUpdateDispPromo = await promocoesModels.updateDispPromocao(req.body.status, req.body.promoid)

        const response = {
            mensagem: "Disponibilidade da promoção foi alterada!",
            statusAtualizado: {
                resultado: resultUpdateDispPromo.affectedRows,
                status: req.body.status,
            }
        }
        return res.status(400).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

