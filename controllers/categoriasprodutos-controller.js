const categoriasModels = require('../models/categorias-models')
const lojasModels = require('../models/lojas-models')
const produtosModels = require('../models/produtos-models')
const util = require('../util/validacoes')


exports.cadastro = async (req, res, next) => {
    try {
        const result = await categoriasModels.validaDuplicidade(req.body.catprodnome, req.body.usuid)

        if (result.length > 0) {
            return res.status(401).json({ mensagem: "Essa categoria já existe!" })
        }

        const resultSqlLoja = await lojasModels.buscarId(req.body.usuid);

        const dados = req.body

        const resultValidaCategoria = util.validaCategoria(dados)

        if (resultValidaCategoria.retorno) {

            const resulCadastro = await categoriasModels.cadastro(dados, resultSqlLoja[0].lojid)

            const response = {
                msg: 'Categoria de produto inserida com sucesso!',
                categoriaCriada: {
                    catprodid: resulCadastro.insertId,
                    catprodnome: req.body.catprodnome,
                    lojid: resultSqlLoja[0].lojid,
                    status: req.body.status,
                    catprodmeia: req.body.catprodmeia,
                    usuid: req.body.usuid
                }
            }
            return res.status(200).send({ response })
        }
        else
            return res.status(400).json({ resultValidaCategoria })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.obterCategoriaUsuario = async (req, res, next) => {
    try {
        const resultSqlCat = await categoriasModels.obterCategoriaUsuario(req.body.usuid);

        if (resultSqlCat.length == 0) {
            const response = { msg: 'Não exite categorias para esse usuário!' }
            return res.status(404).json({ response })
        }

        const response = {
            categorias: resultSqlCat.map(cat => {
                return {
                    usuid: cat.usuid,
                    catprodid: cat.catprodid,
                    catprodnome: cat.catprodnome,
                    catprodmeia: cat.catprodmeia,
                    status: cat.status
                }
            })
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}

exports.delete = async (req, res, next) => {
    try {
        const resultSqlCat = await categoriasModels.categoriaExistente(req.params.catprodid)

        if (resultSqlCat.length == 0) {
            const response = { mensagem: "Essa categoria não existe!" }
            return res.status(404).json({ response })
        }

        const resultSqlCount = await produtosModels.qtdeProdPorCategoria(req.params.catprodid)

        if (resultSqlCount[0].total == 0) {
            const resultDelete = await categoriasModels.deleteCategoria(req.params.catprodid);

            const response = {
                delete: resultDelete.affectedRows,
                msg: 'Categoria excluída com retorno!'
            }
            return res.status(200).json({ response })
        }
        else {
            return res.status(400).json({
                msg: `Essa categoria não pode ser excluída pois existem ${resultSqlCount[0].total} produtos vinculados a ela!`
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.atualizar = async (req, res, next) => {
    try {
        const resultSqlCat = await categoriasModels.selectCategoriaPorUsuario(req.body.catprodid, req.body.usuid);

        if (resultSqlCat.length == 0) {
            const response = { mensagem: "Categoria não existe!" }
            return res.status(404).json({ response })
        }

        const dados = req.body
        const resultValidaCategoria = util.validaCategoria(dados)

        if (resultValidaCategoria.retorno) {

            const resultSqlUpdate = await categoriasModels.atualizar(dados)

            const response = {
                mensagem: "Categoria alterada com sucesso!",
                categoriaAtualizada: {
                    update: resultSqlUpdate.affectedRows,
                    catprodid: req.body.catprodid,
                    catprodnome: req.body.catprodnome,
                    catprodmeia: req.body.catprodmeia,
                    status: req.body.status
                }
            }
            return res.status(202).json({ response })
        }
        else
            return res.status(400).json({ resultValidaCategoria })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

exports.updateDispCategoria = async (req, res, next) => {
    try {
        const resultado = await categoriasModels.atualizarDisponibilidade(req.body.status, req.body.catprodid)

        const response = {
            mensagem: "Disponibilidade da categoria foi alterada!",
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

exports.obterCategoriasDisponiveis = async (req, res, next) => {
    try {
        const resultado = await categoriasModels.obterCatDispPorUsuario(req.body.usuid, req.body.status)
        console.log(resultado)
        const categoriasdisponiveis = {
            resultado: resultado.map(c => {
                return {
                    catprodid: c.catprodid,
                    catprodnome: c.catprodnome,
                    catprodmeia: c.catprodmeia,
                }
            })
        }
        console.log(categoriasdisponiveis)

        return res.status(200).json({ categoriasdisponiveis })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}