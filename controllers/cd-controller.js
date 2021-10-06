const cdModels = require('../models/cd-models')
const categoriasProdutosModels = require('../models/categorias-models')
const lojasModels = require('../models/lojas-models')


exports.obterInforCardapio = async (req, res, next) => {
    try {
        var resultLojaEndereco = await cdModels.obterInforCardapio(req.body.lojurl)

        const resultCategoria = await categoriasProdutosModels.obterCategoriasPorLoja(resultLojaEndereco[0].lojid)

        console.log(resultLojaEndereco)

        const resultFormaPagamento = await lojasModels.obterFormaPgtoUrl(req.body.lojurl)

        console.log(resultFormaPagamento)

        const resultPromocao = await cdModels.obterPromocaoPorLoja(resultLojaEndereco[0].lojid)

        console.log("categoria: " + resultCategoria[0].catprodid)

        const resultHorarioFuncionamento = await lojasModels.obterHorarioFuncionamento(req.body.lojurl)

        console.log(resultHorarioFuncionamento)

        if (resultHorarioFuncionamento.length > 0) {
            console.log(
                `Horário de Funcionamento - 
                        Abre:  ${resultHorarioFuncionamento[0].hfhoraabertura}
                        Fecha: ${resultHorarioFuncionamento[0].hfhorafechamento}
                `)
            horariofuncionamento = { status: resultLojaEndereco[0].status = 1 }
        }
        else {
            horariofuncionamento = { status: resultLojaEndereco[0].status = 0 }
        }

        const lojaendereco = {
            resultado: resultLojaEndereco.map(lojaend => {
                return {
                    lojnomeempresa: lojaend.lojnomeempresa,
                    endrua: lojaend.endrua,
                    endnumero: lojaend.endnumero,
                    endbairro: lojaend.endbairro,
                    endcidade: lojaend.endcidade,
                    enduf: lojaend.enduf,
                    lojtelefone: lojaend.lojtelefone,
                    lojtaxaentrega: lojaend.lojtaxaentrega,
                    lojtempomin: lojaend.lojtempomin,
                    lojtempomax: lojaend.lojtempomax,
                    lojformapgto: lojaend.lojformapgto,
                    lojlogo: `${process.env.URLFOODTOK}/${lojaend.lojlogo}`,
                    menu: lojaend.descorpadrao,
                    menuT: lojaend.descorsegundaria,
                    card: lojaend.descorterciaria,
                    horariofuncionamento: resultLojaEndereco[0].status,
                    lojmsginicial: lojaend.lojmsginicial,
                    lojmsgfinal: lojaend.lojmsgfinal
                }
            })
        }

        const formapagamento = {
            resultado: resultFormaPagamento.map(f => {
                return {
                    fpid: f.fpid,
                    fpnome: f.fpnome,
                }
            })
        }


        const categorias = {
            resultado: resultCategoria.map(c => {
                return {
                    catprodid: c.catprodid,
                    catprodnome: c.catprodnome,
                    catprodmeia: c.catprodmeia
                }
            })
        }

        const promocao = {
            resultado: resultPromocao.map(pm => {
                return {
                    promoid: pm.promoid,
                    promonome: pm.promonome,
                    promodescricao: pm.promodescricao,
                    promovalortotal: pm.promovalortotal,
                    imgpromocaminho: `http://foodtok.tanca.com.br:3000/${pm.imgpromocaminho}`
                }
            })
        }

        return res.status(200).json({
            lojaendereco, formapagamento, categorias, /*produto,*/ promocao, /*acrescimo*/
        })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.acrescimoPorCategoriaCardapio = async (req, res, next) => {
    try {

        const result = await cdModels.acrescimoPorCategoriaCardapio(req.body.catprodid)

        if (result.length == 0) {
            const response = { msg: 'Não existe nenhum acrescimo para essa categoria!' }
            return res.status(404).json({ response })
        }

        const response = {
            acrescimos: result.map(acres => {
                return {
                    acrid: acres.acrid,
                    lojid: acres.lojid,
                    catprodid: acres.catprodid,
                    acrnome: acres.acrnome,
                    acrvalor: acres.acrvalor,
                    acrdisp: acres.acrdisp
                }
            })
        }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

