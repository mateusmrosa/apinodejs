const imagensModels = require('../models/imagens-models')


exports.obterImgPorProduto = async (req, res, next) => {
    try {
        const resultSelect = await imagensModels.obterPorIdProduto(req.body.prodid)

        if (resultSelect.length == 0) {
            const response = { msg: 'Não existe imagem para esse produto!' }
            return res.status(404).json({ response })
        }

        return res.status(200).json({
            imagens: resultSelect.map(img => {
                return {
                    prodid: img.prodid,
                    imgproid: img.imgproid,
                    imagem: `${process.env.URLFOODTOK}/${img.imgprocaminho}`
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
        console.log(req.files[0].path)

        const resultSelect = await imagensModels.obterPorIdProdutoAndIdImg(req.body.prodid, req.body.imgproid)

        console.log(resultSelect.length)

        if (resultSelect.length == 0) {
            return res.status(404).json({ msg: 'Imagem inexistente!' })
        }

        const resultUpdate = await imagensModels.atualizarImgProduto(req.files[0].path, req.body.prodid, req.body.imgproid)

        console.log(resultUpdate.affectedRows + " " + req.files[0].path)

        const response = {
            mensagem: "Imagem do produto alterada com sucesso!",
            imagemAtualizada: {
                resultado: resultUpdate.affectedRows,
                prodid: req.body.prodid,
                imgproid: req.body.imgproid,
                imgprocaminho: req.files[0].path
            }
        }
        return res.status(200).json({ response })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.obterImgPromocao = async (req, res, next) => {
    try {
        console.log(req.body)
        const result = await imagensModels.obterPorPromocao(req.body.promoid)

        console.log(result)

        if (result.length == 0) {
            const response = { msg: 'Não existe imagem para esse produto!' }
            return res.status(404).json({ response })
        }

        return res.status(200).json({
            imagens: result.map(img => {
                return {
                    imgpromoid: img.imgpromoid,
                    promoid: img.promoid,
                    imagem: `${process.env.URLFOODTOK}/${img.imgpromocaminho}`
                }
            })
        })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.cadastroImgPromocaoId = async (req, res) => {
    try {

        console.log(req.body, req.files)

        img = req.files

        for (let imgpromocaminho of img) {
            var resultado = await imagensModels.cadastrarImgPromoId(req.body.promoid, imgpromocaminho.path)
        }

        const response = {
            msg: 'Imagem da promoção cadastrada com sucesso!',
            resultado: resultado.affectedRows
        }

        return res.status(201).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.updateImgPromocao = async (req, res, next) => {
    try {
        const imagem = req.files

        console.log(imagem[0].path)

        const resultado = await imagensModels.updateImgPromocao(imagem[0].path, req.body.promoid)

        const response = {
            mensagem: "Imagem da promoção atualizada com sucesso!",
            resultado: resultado.affectedRows,
            imgpromocaminho: `${process.env.URLFOODTOK}/${imagem[0].path}`
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.updateImgProduto = async (req, res, next) => {
    try {
        const imagem = req.files

        console.log(imagem[0].path)

        const resultado = await imagensModels.updateImgProduto(req.body.prodid, imagem[0].path)

        const response = {
            mensagem: "Imagem do produto atualizada com sucesso!",
            resultado: resultado.affectedRows,
            imgprocaminho: `${process.env.URLFOODTOK}/${imagem[0].path}`
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}