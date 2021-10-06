const admModels = require('../models/adm-models')


exports.buscaDadosAdm = async (req, res, next) => {
    try {
        const resultDadosAdm = await admModels.buscaDadosAdm()

        if (resultDadosAdm.lenght < 0) {

            const response = { msg: 'Dados não encontrado' }

            return res.status(404).json({ response })
        }
        else {
            return res.status(200).json({
                dados: resultDadosAdm.map(d => {
                    return {
                        idusuario: d.usuid,
                        lojas: d.lojnomeempresa,
                        urls: d.lojurl
                    }
                })
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.obterDados = async (req, res, next) => {
    try {
        console.log(req.body)
        const resultDadosAdm = await admModels.obterDados()

        console.log(resultDadosAdm)

        if (resultDadosAdm.lenght < 0) {

            const response = { msg: 'Dados não encontrado' }

            return res.status(404).json({ response })
        }
        else {
            return res.status(200).json({
                dados: resultDadosAdm.map(d => {
                    return {
                        idusuario: d.usuid,
                        loja: d.lojnomeempresa,
                        nomevendedor: d.vennome,
                        email: d.usuemail,
                        sugestaotitulo: d.sugtitulo,
                        sugestaotexto: d.sugtexto,
                        sugestaodata: d.sugdata
                    }
                })
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}