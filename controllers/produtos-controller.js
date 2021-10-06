const produtosModels = require('../models/produtos-models')
const util = require('../util/validacoes')
const lojasModels = require('../models/lojas-models')
const imagensModels = require('../models/imagens-models')


exports.cadastro = async (req, res, next) => {
    try {
        const resultSelectProd = await produtosModels.obterProdutosPorNomeIdUsuario(req.body.prodnome, req.body.usuid)

        if (req.files == undefined)
            return res.status(400).send({ msg: "Insira as imagens do produto" })

        if (resultSelectProd.length > 0) {
            return res.status(400).json({ msg: 'Esse produto já existe' })
        }
        else {
            const resultSelectIdLoja = await lojasModels.buscarId(req.body.usuid);

            const dados = req.body

            const resultValidacao = util.validaProduto(dados)

            if (resultValidacao.retorno) {

                const resultInsertProd = await produtosModels.insertProdutos(dados, resultSelectIdLoja[0].lojid)

                if (resultInsertProd.affectedRows > 0) {

                    const imagens = req.files;

                    const resulValicaoImgProduto = util.validaImgProduto(imagens)

                    console.log(resulValicaoImgProduto)

                    if (resulValicaoImgProduto.retorno) {

                        imagens.forEach(async function (imagens) {
                            console.log(imagens)
                            await imagensModels.insertImgProdutos(resultInsertProd.insertId, imagens.path)
                        })

                        return res.status(201).json({
                            mensagem: 'Produto inserido com retorno!',
                            produtoCriado: {
                                prodid: resultInsertProd.insertId,
                                usuid: parseInt(req.body.usuid),
                                lojid: resultSelectIdLoja[0].lojid,
                                catprodid: req.body.catproid,
                                proddisp: req.body.proddisp
                            }
                        })
                    }
                    else
                        return res.status(400).json({ resulValicaoImgProduto })

                } else {
                    console.log(resultInsertProd.affectedRows)
                    const response = { msg: "Algo deu errado!" }
                    return res.status(400).send({ response })
                }
            }
            else
                return res.status(400).json({ resultValidacao })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.obterProdutos = async (req, res, next) => {
    try {
        const resultSeletcProd = await produtosModels.obterProdutos(req.body.usuid)

        if (resultSeletcProd.length == 0) {
            const response = { msg: 'Produto não existe!' }
            return res.status(404).json({ response })
        }
        console.log(resultSeletcProd)

        return res.status(200).json({
            produtos: resultSeletcProd.map(prod => {
                return {
                    idusuario: prod.idusuario,
                    catprodid: prod.catprodid,
                    categoria: prod.categoria,
                    idproduto: prod.idproduto,
                    produto: prod.produto,
                    descricao: prod.descricao,
                    valor: prod.valor,
                    status: prod.status
                }
            })
        })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu erradoooooooo!", Erro: e })
    }
}


exports.delete = async (req, res, next) => {
    try {
        const resultDelImgProd = await imagensModels.deleteImgProduto(req.params.prodid)

        console.log(resultDelImgProd.affectedRows)

        if (resultDelImgProd.affectedRows > 0) {

            const resultDelProdPorId = await produtosModels.deletePorIdProd(req.params.prodid)

            const response = {
                result: resultDelProdPorId.affectedRows,
                msg: 'Produto excluído com retorno!'
            }
            return res.status(200).json({ response })
        }
        else {
            return res.status(500).json({ error: 'Algo deu erro!' })
        }

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.atualizar = async (req, res, next) => {
    try {
        const resulSelect = await produtosModels.buscarId(req.body.prodid)

        if (resulSelect.length == 0) {
            return res.status(404).json({ msg: 'Produto inexistente!' })
        }

        const { prodnome, proddescricao, prodvalor, status, prodid } = req.body

        const dados = req.body

        const resultValidacao = util.validaProduto(dados)

        if (resultValidacao.retorno) {

            const resultado = await produtosModels.atualizar(dados)

            const response = {
                mensagem: "Produto alterado com retorno!",
                produtoAtualizado: {
                    resultado: resultado.affectedRows,
                    prodid: req.body.prodid,
                    prodnome: req.body.prodnome,
                    proddescricao: req.body.proddescricao,
                    prodvalor: req.body.prodvalor,
                    status: req.body.status,
                }
            }
            return res.status(200).json({ response })
        }
        else
            return res.status(400).json({ resultValidacao })


    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.updateDispProduto = async (req, res, next) => {
    try {
        const resultUpdate = await produtosModels.updateDispProduto(req.body.status, req.body.prodid)

        const response = {
            mensagem: "Disponibilidade do produto foi alterada!",
            statusAtualizado: {
                resultado: resultUpdate.affectedRows,
                status: req.body.status,
            }
        }
        return res.status(400).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.obterProdutosPorCategoria = async (req, res, next) => {
    try {
        const resultSelectPorCategoria = await produtosModels.obterProdutosPorCategoria(req.body.catprodid)

        const produtosporcategorias = {
            resultado: resultSelectPorCategoria.map(p => {
                return {
                    prodid: p.prodid,
                    prodnome: p.prodnome,
                    proddescricao: p.proddescricao,
                    prodvalor: p.prodvalor,
                }
            })
        }

        return res.status(200).json({ produtosporcategorias })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


// async function obterProdutosPorCat(id) {
//     try {
//         const sql = `SELECT    p.prodid, prodnome, proddescricao,
//                                prodvalor, i.imgprocaminho
//                      FROM      produtos p
//                      LEFT JOIN imagens_produtos    AS i ON p.prodid    = i.prodid
//                      LEFT JOIN categorias_produtos AS c ON c.catprodid = p.catprodid
//                      WHERE c.catprodid = ?
//                      AND   c.status = '1' AND p.status = '1'`

//         const result = await mysql.execute(sql, [id])

//         return result

//     } catch (e) {
//         console.log(e)
//         return response = { msg: "Algo deu errado", Erro: e }
//     }
// }
// module.exports.obterProdutosPorCat = obterProdutosPorCat



exports.produtosPorCategoriaCardapio = async (req, res, next) => {
    try {
        const resultSelProdPorCat = await produtosModels.obterProdutosPorCategoria(req.body.catprodid)

        const produtosporcategorias = {
            resultado: resultSelProdPorCat.map(p => {
                return {
                    prodid: p.prodid,
                    prodnome: p.prodnome,
                    proddescricao: p.proddescricao,
                    prodvalor: p.prodvalor,
                    imgprocaminho: `${process.env.URLFOODTOK}/${p.imgprocaminho}`
                }
            })
        }

        return res.status(200).json({ produtosporcategorias })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
