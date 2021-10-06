const mail = require('../mail/smtp')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const util = require('../util/validacoes')
const lojaModels = require('../models/lojas-models')
const usuariosModels = require('../models/usuarios-models')
const acrescimoModels = require('../models/acrescimo-models')
const imagensModels = require('../models/imagens-models')
const comboModels = require('../models/combos-models')
const produtosModels = require('../models/produtos-models')
const categoriasModels = require('../models/categorias-models')
const designModels = require('../models/design-models')
const enderecoModels = require('../models/enderecos-models')
const promocoesModels = require('../models/promocoes-models')
const pedidosModels = require('../models/pedidos-models')


//verifica se o email existe na base, se não existir envia um email com link de ativação da conta
exports.cadastro = async (req, res, next) => {
    try {
        const {
            usuemail, ususenha, usutelefone, vennome, endcep, enduf, endcidade, endbairro, endrua,
            endnumero, endnome, endcomplemento, lojnomeempresa, lojcpf, lojcnpj, lojtelefone, lojurl, fgnome
        } = req.body

        const resultDuplicidadeLoja = await lojaModels.validadeDuplicidade(req.body.lojnomeempresa)

        if (resultDuplicidadeLoja.length > 0) {
            return res.status(400).json({ msg: 'Esse nome de Loja já existe!', retorno: false })
        }

        if (!await util.validateEmail(usuemail)) {
            return res.status(400).json({ msg: 'E-mail invalido', retorno: false })
        }

        const resultTelNumero = await util.verificaNumero(usutelefone)
        if (!resultTelNumero.retorno) {
            return res.status(400).json({ resultTelNumero })
        }

        const resultCpf_Cnpj = await util.verificaCPFeCNPJ(lojcpf, lojcnpj)

        if (!resultCpf_Cnpj.retorno) {
            const response = { resultCpf_Cnpj }
            return res.status(400).json({ response })
        }

        const resultValidacoes = util.valida(req.body, req.body.lojnomeempresa)

        if (resultValidacoes.retorno) {

            req.body.lojurl = lojnomeempresa.normalize("NFD").replace(/[^a-zA-Zs]/g, "");

            req.body.lojurl = req.body.lojurl.toLowerCase()

            req.body.usuemail = req.body.usuemail.toLowerCase()

            const resultEmail = await usuariosModels.obterUsuarioPorEmail(usuemail)
            if (resultEmail.length > 0) {
                return res.status(400).json({ mensagem: "Você já está cadastrado!" })
            }

            const resultLoja = await lojaModels.obterNomeLojasPorEmail(usuemail, lojnomeempresa)
            if (resultLoja.length > 0) {
                return res.status(401).json({ mensagem: "Esse nome de Loja já existe!" })
            }

            const dados = req.body

            const token = jwt.sign({ dados }, process.env.JWT_ATIVACONTA_KEY, { expiresIn: 3600 })

            mail.enviarEmailAtivacao(dados, token)

            const response = { mensagem: "Por favor verifique sua caixa de e-mail!", }

            return res.status(200).json({ response })

        }
        else {
            const response = { resultValidacoes }
            return res.status(400).json({ response: response })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

//recebe um token para ativação da conta e cadastra todos objetos
exports.ativarconta = async (req, res, next) => {
    try {
        const { token } = req.body
        if (token) {
            jwt.verify(token, process.env.JWT_ATIVACONTA_KEY, async function (erro, decodedToken) {
                if (erro) {
                    return res.status(400).json({ erro: 'Token incorreto ou expirado' })
                }

                let senha = decodedToken.dados.ususenha.toString();

                const resultSelect = await usuariosModels.obterUsuarioPorEmail(decodedToken.dados.usuemail)
                if (resultSelect.length > 0) {
                    return res.status(400).json({ msg: 'Este dados já estão cadastrados' })
                }

                bcrypt.hash(senha, 10, async (errBcrypt, hash) => {

                    if (errBcrypt) { return res.status(500).json({ error: errBcrypt, msg: "1" }) }

                    const resultInsertUsuarios = await usuariosModels.insertUsuarios(decodedToken.dados.usuemail, decodedToken.dados.usutelefone, hash)

                    if (resultInsertUsuarios.affectedRows > 0) {

                        const resultInsertVendedor = await usuariosModels.insertVendedor(resultInsertUsuarios.insertId, decodedToken.dados.vennome)

                        console.log("usuid " + resultInsertUsuarios.insertId)

                        if (resultInsertVendedor.affectedRows > 0) {

                            const resultInsertEndereco = await usuariosModels.insertEndereco
                                (
                                    resultInsertUsuarios.insertId, decodedToken.dados.endcep, decodedToken.dados.enduf,
                                    decodedToken.dados.endcidade, decodedToken.dados.endbairro, decodedToken.dados.endrua,
                                    decodedToken.dados.endnumero, decodedToken.dados.endnome, decodedToken.dados.endcomplemento
                                )

                            if (resultInsertEndereco.affectedRows > 0) {

                                const resultInsertLoja = await lojaModels.insertLoja
                                    (
                                        resultInsertVendedor.insertId, resultInsertUsuarios.insertId,
                                        decodedToken.dados.lojnomeempresa, decodedToken.dados.lojcpf,
                                        decodedToken.dados.lojcnpj, decodedToken.dados.lojtelefone,
                                        decodedToken.dados.lojurl,
                                    )

                                if (resultInsertLoja.affectedRows > 0) {

                                    const resultInsertDesign = await lojaModels.insertDesign(resultInsertUsuarios.insertId, resultInsertLoja.insertId)

                                    if (resultInsertDesign.affectedRows > 0) {

                                        const resultFormaPgto = await lojaModels.insertFormaPgto(resultInsertLoja.insertId)

                                        const response = {
                                            idusuario: resultInsertUsuarios.insertId,
                                            idvendedor: resultInsertVendedor.insertId,
                                            idendereco: resultInsertEndereco.insertId,
                                            idloja: resultInsertLoja.insertId,
                                            resultDesign: resultInsertDesign.insertId,
                                            resultaFormaPgto: resultFormaPgto.insertId,
                                            msg: 'deu bom...'
                                        }
                                        return res.status(201).json({ response })
                                    }
                                    else
                                        return res.status(500).json({ msg: 'Erro no cad do Design' })
                                } else
                                    return res.status(500).json({ msg: 'Erro no cad da Loja' })
                            } else
                                return res.status(500).json({ msg: 'Erro no cad do Endereço' })
                        } else
                            return res.status(500).json({ msg: 'Erro no cad de vendedor' })
                    } else
                        return res.status(500).json({ msg: 'Erro no cad de usuario' })
                })
            })

        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

//verifica se o email existe, se existir envia uma email para redefinição de senha e grava/atualiza o token na tabela de usuarios
exports.esquecisenha = async (req, res, next) => {
    try {
        const resultSelect = await usuariosModels.obterUsuarioParaValidacao(req.body.usuemail)
        if (resultSelect.length == 0) {
            return res.status(404).json({ mensagem: "Esse e-mail não existe em nossa plataforma" })
        }

        const dados = {
            id: resultSelect[0].usuid,
            email: req.body.usuemail,
            vennome: resultSelect[0].vennome
        }

        const usuid = dados.id
        const token = jwt.sign({ usuid }, process.env.JWT_RESET_PASS, { expiresIn: '2m' })

        await usuariosModels.updateUsuToken(token, dados.email)

        console.log(token, dados.email)

        mail.enviarEmailResetSenha(dados, token)

        return res.status(200).json({ mensagem: "Enviamos um link para seu e-mail, por favor verifique!" })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


//recebe um token e uma nova senha se o token for válido redefini a senha...só funciona se o metodo esauecisenha gerar o token nates
exports.resetsenha = async (req, res, next) => {
    try {
        const { token, novasenha } = req.body

        if (token) {

            jwt.verify(token, process.env.JWT_RESET_PASS, async function (error, decodedToken) {

                if (error) {
                    return res.status(401).json({ error: 'Token inválido ou expirado!' })
                }

                const resultSelect = await usuariosModels.obterToken(decodedToken.usuid)

                if (resultSelect[0].usuresettoken == token) {

                    bcrypt.hash(novasenha, 10, async (errBcrypt, hash) => {

                        if (errBcrypt) { return res.status(500).json({ error: errBcrypt, }) }

                        const resultUpdate = await usuariosModels.resetUpdateSenha(hash, decodedToken.usuid)

                        if (resultUpdate.affectedRows > 0) {
                            return res.status(200).json({ mensagem: "Senha atualizada com sucesso!" })
                        }
                        else {
                            return res.status(500).json({ mensagem: "Erro ao atualizar senha!" })
                        }
                    })
                }
                else {
                    return res.status(404).json({ mensagem: "Token incorreto!" })
                }
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

//faz o login no sistema se a o usuario estiver cadastrado
exports.login = async (req, res, next) => {
    try {
        const resultSelect = await usuariosModels.obterDadosParaLogin(req.body.usuemail)

        console.log(resultSelect[0].ususenha, req.body.ususenha)

        if (resultSelect.length < 1) {
            return res.status(401).json({ mensagem: 'Usuário não existe!' })
        }

        //compara a senha digitada com a hash que existe no banco
        bcrypt.compare(req.body.ususenha, resultSelect[0].ususenha, async (err, result) => {

            if (err) {
                const response = {
                    mensagem: 'Falha no jwt'
                }
                return res.status(401).json({ response })
            }

            if (result) {

                const resultUrlPerfil = await usuariosModels.obterUrlPerfil(resultSelect[0].usuid)

                if (resultUrlPerfil[0].usuperfil == 1) {

                    console.log("Perfil Adm: " + resultUrlPerfil[0].usuperfil)

                    token = jwt.sign({
                        usuid: resultSelect[0].usuid,
                        usuemail: resultSelect[0].usuemail,
                        vennome: resultSelect[0].vennome,
                        peril: resultUrlPerfil[0].usuperfil
                    },
                        process.env.JWT_KEY, { expiresIn: 3550000 })
                }
                else {

                    console.log("Perfil Usuário: " + resultUrlPerfil[0].usuperfil)

                    //faz o login com autenticação do jason web token
                    token = jwt.sign({
                        usuid: resultSelect[0].usuid,
                        usuemail: resultSelect[0].usuemail,
                        vennome: resultSelect[0].vennome,
                        peril: resultUrlPerfil[0].usuperfil
                    },
                        process.env.JWT_KEY, { expiresIn: 3550000 })
                }

                const resultQtdeCategoria = await categoriasModels.obterQtdeCatUsuario(resultSelect[0].usuid)

                const resultQtdeProdutos = await produtosModels.obterQtdeProdUsuario(resultSelect[0].usuid)

                const resultQtdeAcrescimo = await acrescimoModels.obterQtdeAcresUsuario(resultSelect[0].usuid)

                const resultQtdePromocao = await promocoesModels.obterQtdePromoUsuario(resultSelect[0].usuid)

                //retorna a qtde geral de pedidos
                const resultQtdePedidos = await pedidosModels.obterQtdeTotPedidos()

                //retorna a qtde geral de sugestoes
                const resultQtdeSugestoes = await lojaModels.obterTotalSugestoes()

                //retorna a qtde geral de lojas cadastradas -> O front só vai usar qdo o perfil logado for o 'adm'
                const resultTotalLojas = await lojaModels.obterTotalLojas()

                console.log(resultTotalLojas)

                if (resultUrlPerfil[0].usuperfil == 0)
                    urlPerfil = `${process.env.URLFOODTOK}/portal`
                else if (resultUrlPerfil[0].usuperfil == 1)
                    urlPerfil = `${process.env.URLFOODTOK}/adm`

                const response = {
                    msg: 'Autenticado com sucesso!',
                    auth: true,
                    result,
                    usuid: resultSelect[0].usuid,
                    lojid: resultSelect[0].lojid,
                    email: resultSelect[0].usuemail,
                    nome: resultSelect[0].vennome,
                    token,
                    categorias: resultQtdeCategoria[0].total,
                    produtos: resultQtdeProdutos[0].total,
                    acrescimos: resultQtdeAcrescimo[0].total,
                    promocoes: resultQtdePromocao[0].total,
                    totalLojas: resultTotalLojas[0].total,
                    qtdePedidos: resultQtdePedidos[0].total,
                    qtdeSugestoes: resultQtdeSugestoes[0].total,
                    url: urlPerfil
                }

                return res.status(200).json({ response })

            } else {
                const response = {
                    auth: false,
                    msg: 'Senha incorreta'
                }
                return res.status(401).json({ response })
            }
        })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

//atualiza os objetos
exports.atualizar = async (req, res, next) => {
    try {
        const { vennome, usutelefone, usuid } = req.body

        const resultValidacoes = util.validaUsuAtualizacao(req.body)

        if (resultValidacoes.retorno) {

            const resultUsuario = await usuariosModels.obterUsuarioPorId(req.body.usuid)
            console.log(resultUpdate)

            if (resultUsuario.length == 0) {
                return res.status(404).json({ msg: 'Usuário inexistente!' })
            }
            else {

                var resultUpdate = await usuariosModels.atualizarUsuario(vennome, usutelefone, usuid)

                const response = {
                    mensagem: "Usuário alterado com sucesso!",
                    usuarioAtualizado: {
                        resultado: resultUpdate.affectedRows,
                        usuid: req.body.usuid,
                        usutelefone: req.body.usutelefone,
                        vennome: req.body.vennome
                    }
                }

                console.log(response)
                return res.status(202).json({ response })
            }
        }
        else {
            return res.status(400).json({ resultValidacoes })
        }

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }

}

//busca todos objetos que estao cadastrados no sistema
exports.obterUsuario = async (req, res, next) => {
    try {

        const resultado = await usuariosModels.obterUsuarios(req.body.usuid)

        if (resultado.length == 0) {
            return res.status(404).json({
                mensagem: "Registro não encontrado!"
            })
        }

        const response = {
            usuid: resultado[0].usuid,
            usuemail: resultado[0].usuemail,
            usutelefone: resultado[0].usutelefone,
            vennome: resultado[0].vennome,
            endcep: resultado[0].endcep,
            enduf: resultado[0].enduf,
            endcidade: resultado[0].endcidade,
            endbairro: resultado[0].endbairro,
            endcomplemento: resultado[0].endcomplemento,
            endrua: resultado[0].endrua,
            endnumero: resultado[0].endnumero,
            endnome: resultado[0].endnome,
            lojid: resultado[0].lojid,
            lojnomeempresa: resultado[0].lojnomeempresa,
            lojcpf: resultado[0].lojcpf,
            lojcnpj: resultado[0].lojcnpj,
            lojtelefone: resultado[0].lojtelefone,
            lojurl: resultado[0].lojurl,
            lojlogo: resultado[0].lojlogo,
            lojtaxaentrega: resultado[0].lojtaxaentrega,
            lojtempomin: resultado[0].lojtempomin,
            lojtempomax: resultado[0].lojtempomax,
            lojmsginicial: resultado[0].lojmsginicial,
            lojmsgfinal: resultado[0].lojmsgfinal,
            lojlogo: `${process.env.URLFOODTOK}/${resultado[0].lojlogo}`
        }
        return res.status(200).json({ response })
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

//exclui totalmente todos os dados
exports.delete = async (req, res, next) => {
    try {

        const resultDelAcrescimo = await acrescimoModels.deleteAcrescimo(req.body.usuid)
        if (resultDelAcrescimo.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do acrescimo' })
        }

        const resultDelImgProduto = await imagensModels.deleteImgProduto(req.body.prodid)
        if (resultDelImgProduto.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da imagem do produto' })
        }

        const dados = req.body

        const resultDelCombo = await comboModels.deleteCombo(dados)
        if (resultDelCombo.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do combo' })
        }

        const resultDelProdutos = await produtosModels.deleteProduto(req.body.usuid)
        if (resultDelProdutos.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do produto' })
        }

        const resultDelCategorias = await categoriasModels.deleteCategoriaPorUsuario(req.body.usuid)
        if (resultDelCategorias.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da categoria' })
        }

        const resultDelDesign = await designModels.deleteDesignPorUsuario(req.body.usuid)
        if (resultDelDesign.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do design' })
        }

        const resultDelEndereco = await enderecoModels.deleteEnderecoPorUsuario(req.body.usuid)
        if (resultDelEndereco.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do endereço' })
        }

        const resultDelFormaPgto = await lojaModels.deleteFormaPgtoPorLoja(req.body.lojid)
        if (resultDelFormaPgto.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da forma de pagamento' })
        }

        const resultDelHorarioFunc = await lojaModels.deleteHorarioFunc(req.body.lojid)
        if (resultDelHorarioFunc.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do horario de funcionamento' })
        }

        const resultDelImgPromocao = await promocoesModels.deleteImgPromocao(req.body.promoid)
        if (resultDelImgPromocao.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da imagem da promoção' })
        }

        const resultDelPromocao = await promocoesModels.deletePromocao(req.body.usuid)
        if (resultDelPromocao.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da promoção' })
        }

        const resultDelLoja = await lojaModels.deleteLoja(req.body.usuid)
        if (resultDelLoja.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da loja' })
        }

        const resultDelVendedor = await usuariosModels.deleteVendedor(req.body.usuid)
        if (resultDelVendedor.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do vendedor' })
        }

        const resultDelSugestao = await usuariosModels.deleteSugestao(req.body.usuid)
        if (resultDelSugestao.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão da sugestão' })
        }

        const resultDelUsuario = await usuariosModels.deleteUsuario(req.body.usuid)
        if (resultDelUsuario.affectedRows == 0) {
            return res.status(500).json({ mgs: 'Erro na exclusão do usuário' })
        }

        else {
            return res.status(200).json({ msg: 'Sua conta foi totalmente excluída!' })
        }

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.atualizarSenha = async (req, res) => {
    try {
        //busca a senha (hash) no banco
        const senhaDoBanco = await usuariosModels.buscaSenhaAtual(req.body.usuid)

        const resultado = util.validaSenha(req.body.novasenha)

        if (!resultado.retorno) {
            const response = { msg: resultado }
            return res.status(400).json({ response })
        }
        //compara a hash do banco com a senha digitada. A senha digitada não precisa criptografar para fazer a comparação
        bcrypt.compare(req.body.senhaAtual, senhaDoBanco[0].ususenha, (erro, result) => {

            if (result) {

                bcrypt.hash(req.body.novasenha, 10, (errBcrypt, hash) => {

                    if (errBcrypt) { return res.status(500).json({ error: errBcrypt }) }

                    usuariosModels.atualizaSenha(req.body.usuid, hash)

                    const response = {
                        msg: 'Senha atualizada!',
                        novasenha: req.body.novasenha
                    }

                    return res.status(200).json({ response })
                })
            }
            else
                return res.status(400).json({ msg: 'As senhas não conferem!' })
        })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.obterTodosUsuarios = async (req, res, next) => {
    try {

        const resultado = await usuariosModels.obterTodosUsuarios()

        if (resultado.length == 0) {
            return res.status(404).json({
                mensagem: "Registro não encontrado!"
            })
        }

        const response = {
            usuarios: resultado.map(u => {
                return {
                    usuid: u.usuid,
                    usuemail: u.usuemail,
                    usutelefone: u.usutelefone,
                    vennome: u.vennome,
                    endcep: u.endcep,
                    enduf: u.enduf,
                    endcidade: u.endcidade,
                    endbairro: u.endbairro,
                    endcomplemento: u.endcomplemento,
                    endrua: u.endrua,
                    endnumero: u.endnumero,
                    endnome: u.endnome,
                    lojid: u.lojid,
                    lojnomeempresa: u.lojnomeempresa,
                    lojcpf: u.lojcpf,
                    lojcnpj: u.lojcnpj,
                    lojtelefone: u.lojtelefone,
                    lojurl: u.lojurl,
                    lojlogo: u.lojlogo,
                    lojtaxaentrega: u.lojtaxaentrega,
                    lojtempomin: u.lojtempomin,
                    lojtempomax: u.lojtempomax,
                    lojmsginicial: u.lojmsginicial,
                    lojmsgfinal: u.lojmsgfinal,
                    lojlogo: `${process.env.URLFOODTOK}/${resultado[0].lojlogo}`
                }
            })
        }
        return res.status(200).json({ response })
    }
    catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}