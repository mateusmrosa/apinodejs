const lojasModels = require('../models/lojas-models')
const mail = require('../mail/smtp')
const usuariosModels = require('../models/usuarios-models')
const util = require('../util/validacoes')
const uUtil = require('../util/util')



exports.updateTaxaEntrega = async (req, res, next) => {
    try {
        const resultUpdate = await lojasModels.updateTaxaEntrega(req.body.lojtaxaentrega, req.body.lojid)
        const response = {
            mensagem: "Taxa de Entrega alterada com sucesso!",
            produtoAtualizado: {
                resultado: resultUpdate.affectedRows,
                lojtaxaentrega: req.body.lojtaxaentrega,
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}


exports.updateMsgFinal = async (req, res, next) => {
    try {
        const dados = req.body
        const resultado = await lojasModels.updateMsgFinal(dados)

        console.log(dados.lojmsgfinal)

        const response = {
            mensagem: "Mensagem atualizada vom sucesso!!",
            produtoAtualizado: {
                resultado: resultado.affectedRows,
                lojmsgfinal: dados.lojmsgfinal,
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.updateMsgInicial = async (req, res, next) => {
    try {
        const dados = req.body
        const resultado = await lojasModels.updateMsgInicial(dados)

        console.log(dados.lojmsginicial)

        const response = {
            mensagem: "Mensagem atualizada vom sucesso!!",
            produtoAtualizado: {
                resultado: resultado.affectedRows,
                lojmsgincial: dados.lojmsginicial,
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}


exports.updateUrl = async (req, res, next) => {
    try {

        const dados = req.body
        const resultado = await lojasModels.updateUrl(dados)

        console.log(resultado.affectedRows)

        const response = {
            mensagem: "Nome da loja atualizado com sucesso!",
            lojaAtualizada: {
                resultado: resultado.affectedRows,
                lojurl: dados.lojurl,
                lojid: dados.lojid,
                usuid: dados.usuid
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.updateNomeLoja = async (req, res, next) => {
    try {
        const dados = req.body
        const resultado = await lojasModels.updateNomeLoja(dados)

        console.log(resultado.affectedRows)

        const response = {
            mensagem: "Nome da loja atualizado com sucesso!",
            lojaAtualizada: {
                resultado: resultado.affectedRows,
                lojnomeempresa: dados.lojnomeempresa,
                lojid: dados.lojid,
                usuid: dados.usuid
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.updateTempoEspera = async (req, res, next) => {
    try {
        const dados = req.body

        const resultUpdateTemEsp = await lojasModels.updateTempoEspera(dados)

        const response = {
            mensagem: "Taxa de Entrega alterada com sucesso!",
            produtoAtualizado: {
                resultado: resultUpdateTemEsp.affectedRows,
                lojtempomin: req.body.lojtempomin,
                lojtempomax: req.body.lojtempomax
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}


exports.updateDispLoja = async (req, res, next) => {
    try {
        const resultUpdate = await lojasModels.updateDispLoja(req.body.status, req.body.lojid)

        const response = {
            mensagem: "Disponibilidade da loja foi alterada!",
            statusAtualizado: {
                resultado: resultUpdate.affectedRows,
                status: req.body.status,
            }
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.horarioFuncionamento = async (req, res, next) => {
    try {
        const resultHoraFunc = await lojasModels.horarioFuncionamento(req.body.lojurl)

        console.log(resultHoraFunc)
        const horario = {
            horario: resultHoraFunc.map(h => {
                return {
                    hfid: h.hfid,
                    hfdiasemana: h.hfdiasemana,
                    hfhoraabertura: h.hfhoraabertura,
                    hfhorafechamento: h.hfhorafechamento,
                }
            })
        }
        return res.status(200).json({ horario })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.updateTelefone = async (req, res, next) => {
    try {

        const resultValidacao = util.validaTelefoneLoja(req.body.lojtelefone)

        if (resultValidacao.retorno) {
            const resultUpdateTelefone = await lojasModels.updateTelefone(req.body.lojtelefone, req.body.lojid)

            const response = {
                mensagem: "Telefone da loja alterado com sucesso!",
                telefoneAtualizado: {
                    resultado: resultUpdateTelefone.affectedRows,
                    lojtelefone: req.body.lojtelefone,
                }
            }
            return res.status(200).json({ response })
        }
        else {
            const response = resultValidacao
            return res.status(400).json({ response })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}

exports.cadastroFormaPgto = async (req, res, next) => {
    try {
        const resultFormaPgto = await lojasModels.obterFormaPgtoUrl(req.body.fpnome, req.body.lojid)

        if (resultFormaPgto.length > 0) {
            return res.status(400).json({ msg: 'Esse forma de pagamento já esta cadastrada' })
        }
        else {
            const resultInsert = await lojasModels.cadastroFormaPgto(req.body.lojid, req.body.fpnome)

            const response = {
                lojid: req.body.lojid,
                fpid: resultInsert.insertId,
                fpnome: req.body.fpnome,
            }

            return res.status(201).json({ response })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.atualizarFormaPgto = async (req, res, next) => {
    try {
        const resultSelect = await lojasModels.obterFormaPgtoPorNome(req.body.fpnome)

        if (resultSelect.length > 0) {
            return res.status(404).json({ mensagem: "Essa forma de pagamento ja existe" })
        }

        const resultUpdate = await lojasModels.atualizarFormaPgto(req.body.fpnome, req.body.fpid)

        const response = {
            lojid: req.body.lojid,
            fpid: resultUpdate.affectedRows,
            fpnome: req.body.fpnome,
        }

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.deleteFormaPgto = async (req, res, next) => {
    try {
        const resultSelect = await lojasModels.obterFormaPgtoPorId(req.params.fpid)

        if (resultSelect.length == 0) {
            return res.status(404).json({ mensagem: "Essa forma de pagamento não existe" })
        }

        const resultDelete = await lojasModels.deleteFormaPgtoPorId(req.params.fpid)

        const response = {
            fpid: resultDelete.affectedRows,
            msg: 'Forma de pagamento excluída com sucesso!'
        }

        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.cadastroLogo = async (req, res, next) => {
    try {
        const logo = req.files

        console.log(req.body.usuid)
        console.log(logo)

        const resultUpdate = await lojasModels.cadastrarLogo(logo[0].path, req.body.usuid)

        const response = {
            msg: 'Logo inserida com sucesso!',
            resultado: resultUpdate.affectedRows,
            id: req.body.usuid,
            lojlogo: `${process.env.URLFOODTOK}/${logo[0].path}`,
        }

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.obterFormaPagamento = async (req, res, next) => {
    try {

        const resultaSelect = await lojasModels.obterFormaPagamento(req.body.usuid)

        console.log(resultaSelect)

        const formapagamento = {
            resultado: resultaSelect.map(f => {
                return {
                    fpid: f.fpid,
                    fpnome: f.fpnome,
                }
            })
        }

        return res.status(200).json({ formapagamento })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.atualizarEndereco = async (req, res, next) => {
    try {
        const dados = req.body
        const resultUpdate = await lojasModels.atualizarEndereco(dados, req.params.usuid)

        const response = {
            msg: 'Endereço atualizado com sucesso!',
            resultado: resultUpdate.affectedRows,
        }

        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.cadastroHorariodeFuncionamento = async (req, res, next) => {
    try {
        const dados = req.body

        const resultInsert = await lojasModels.cadastroHorariodeFuncionamento(dados)

        const response = {
            lojid: req.body.lojid,
            fpid: resultInsert.insertId,
            hfdiasemana: req.body.hfdiasemana,
            hjhoraabertura: req.body.hjhoraabertura,
            hjhorafechamento: req.body.hjhorafechamento,
        }

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.deletehorariofuncionamento = async (req, res, next) => {
    try {
        const resultDelete = await lojasModels.deletehorariofuncionamento(req.params.hfid)

        const response = {
            msg: 'Horário deletado com sucesso!',
            delete: resultDelete.affectedRows,
        }

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.atualizarhorariofuncionamento = async (req, res, next) => {
    try {

        const { hfid, hfdiasemana, hfhoraabertura, hfhorafechamento } = req.body

        dados = req.body

        const resultAtualizar = await lojasModels.atualizarhorariofuncionamento(dados)


        const response = {
            atualizar: resultAtualizar.affectedRows,
            hfdiasemana: dados.hfdiasemana,
            hjhoraabertura: dados.hfhoraabertura,
            hjhorafechamento: dados.hfhorafechamento,
        }

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.cadastrarSugestao = async (req, res, next) => {
    try {
        const dados = req.body
        const resultado = await lojasModels.cadastrarSugestao(dados)

        const dadosUsuarioLogado = await usuariosModels.obterDadosUsuarioLogado(dados.usuid)

        const response = {
            msg: 'Sugestão cadastrada com sucesso',
            sugid: resultado.insertId,
            usuid: dados.usuid,
            sugtitulo: dados.sugtitulo,
            sugtexto: dados.sugtexto
        }

        var msgs = {
            titulo: dados.sugtitulo,
            texto: dados.sugtexto
        }

        //dentro da 'const dadosUsuarioLogado' esta o email e o nome do vendedor
        mail.enviarEmailSugestao(dadosUsuarioLogado, msgs)

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.gerarCodigo = async (req, res, next) => {
    try {

        let usuid = req.body.usuid

        let resultLojaId = await lojasModels.buscarId(usuid)

        if (resultLojaId.length == 0) {
            return res.status(404).json({ msg: 'Não existe loja para esse usuário!' })
        }

        var lojcod = uUtil.getRandom(usuid)

        const resultCodLoja = await lojasModels.obterCodigo(resultLojaId[0].lojid)

        console.log(resultCodLoja[0].lojcod)

        if (resultCodLoja[0].lojcod == null || resultCodLoja[0].lojcod == "") {
            var resultGravar = await lojasModels.gravarCodigo(resultLojaId[0].lojid, usuid, lojcod)

            const response = {
                msg: "Gravou o codigo na tabela loja",
                linhasafetadas: resultGravar.affectedRows,
                lojcod
            }
            return res.status(201).json({ response })
        }
        else {
            var resultupdate = await lojasModels.atualizarCodigo(resultLojaId[0].lojid, usuid, lojcod)

            const response = {
                msg: "Atualizou o codigo na tabela loja",
                linhasafetadas: resultupdate.affectedRows,
                lojcod
            }
            return res.status(200).json({ response })
        }

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}