const mysql = require('../mysql')

/*metodo consumido pela controller de usuario para verificar se
  o nome da loja digitado é igual a alguma url que existe no banco
*/
async function validadeDuplicidade(lojnomeempresa) {
    try {
        console.log(lojnomeempresa)

        lojnomeempresa = lojnomeempresa.normalize("NFD").replace(/[^a-zA-Zs]/g, "");

        lojnomeempresa = lojnomeempresa.toLowerCase()

        console.log(lojnomeempresa)

        const sql = `SELECT * FROM lojas WHERE lojurl = ?`
        const result = await mysql.execute(sql, [lojnomeempresa])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.validadeDuplicidade = validadeDuplicidade



async function obterNomeLojasPorEmail(email, lojanome) {
    try {
        const sql = `SELECT * FROM lojas l
                     LEFT JOIN usuarios AS u ON u.usuid = l.usuid
                     WHERE u.usuemail = ?`
        const result = await mysql.execute(sql, [email, lojanome])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterNomeLojasPorEmail = obterNomeLojasPorEmail


async function obterNomeLojas() {
    try {
        const sql = `SELECT lojnomeempresa FROM lojas`
        const result = await mysql.execute(sql)
        return result
    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterNomeLojas = obterNomeLojas



async function obterId(loja) {
    try {
        console.log(loja)
        const sql = `SELECT lojid FROM lojas WHERE lojnomeempresa = ?`
        const result = await mysql.execute(sql, [loja])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterId = obterId



async function updateNomeLoja(dados) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojnomeempresa = ? 
                     WHERE  lojid = ?
                     AND    usuid = ?`

        const result = await mysql.execute(
            sql,
            [
                dados.lojnomeempresa,
                dados.lojid,
                dados.usuid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateNomeLoja = updateNomeLoja


async function updateMsgFinal(dados) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojmsgfinal = ? 
                     WHERE  lojid = ?
                     AND    usuid = ?`

        const result = await mysql.execute(
            sql,
            [
                dados.lojmsgfinal,
                dados.lojid,
                dados.usuid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateMsgFinal = updateMsgFinal


async function updateMsgInicial(dados) {
    try {

        const sql = `UPDATE lojas 
                     SET    lojmsginicial = ? 
                     WHERE  lojid = ?
                     AND    usuid = ?`

        const result = await mysql.execute(
            sql,
            [
                dados.lojmsginicial,
                dados.lojid,
                dados.usuid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateMsgInicial = updateMsgInicial


async function updateUrl(dados) {
    try {
        dados.lojurl = dados.lojurl.normalize("NFD").replace(/[^a-zA-Zs]/g, "");
        dados.lojurl = dados.lojurl.toLowerCase()

        const sql = `UPDATE lojas 
                     SET    lojurl = ? 
                     WHERE  lojid  = ?
                     AND    usuid  = ?`

        const result = await mysql.execute(
            sql,
            [
                dados.lojurl,
                dados.lojid,
                dados.usuid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateUrl = updateUrl


async function buscarId(id) {
    try {
        const sql = 'SELECT lojid FROM lojas WHERE usuid = ?';
        const result = await mysql.execute(sql, [id]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.buscarId = buscarId



async function obterIdPorCodLoja(lojcod) {
    try {
        const sql = `SELECT lojid FROM lojas WHERE lojcod = ?`
        const result = await mysql.execute(sql, [lojcod])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterIdPorCodLoja = obterIdPorCodLoja



async function buscarIdPorUrl(lojurl) {
    try {
        const sql = 'SELECT lojid FROM lojas WHERE lojurl = ?';
        const result = await mysql.execute(sql, [lojurl]);

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.buscarIdPorUrl = buscarIdPorUrl


async function deletehorariofuncionamento(id) {
    try {
        const sql = `DELETE FROM horario_funcionamento WHERE hfid = ?`
        const resultado = await mysql.execute(sql, [id])

        return resultado

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deletehorariofuncionamento = deletehorariofuncionamento


async function atualizarhorariofuncionamento(dados) {
    try {
        const sql = `UPDATE horario_funcionamento
                     SET hfdiasemana = ?, hfhoraabertura = ?, hfhorafechamento = ?
                     WHERE hfid = ?`
        const resultado = await mysql.execute(
            sql,
            [
                dados.hfdiasemana, dados.hfhoraabertura,
                dados.hfhorafechamento, dados.hfid,
            ])

        return resultado

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarhorariofuncionamento = atualizarhorariofuncionamento


async function cadastrarSugestao(dados) {
    try {
        h = new Date
        let d = new Date().toLocaleDateString('pt-br')
        var data = d + "|" + h.getHours() + ":" + String(h.getMinutes()).padStart(2, "0")

        console.log(dados)
        const sql = `INSERT INTO sugestoes (usuid, sugtitulo, sugtexto, sugdata)
                     VALUES (?,?,?,?)`

        const result = await mysql.execute(
            sql,
            [
                dados.usuid,
                dados.sugtitulo,
                dados.sugtexto,
                data
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastrarSugestao = cadastrarSugestao


async function deleteFormaPgtoPorLoja(idLoja) {
    try {
        const sql = `DELETE FROM formas_pagamentos WHERE lojid = ?`
        const result = await mysql.execute(sql, [idLoja])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteFormaPgtoPorLoja = deleteFormaPgtoPorLoja


async function deleteHorarioFunc(idLoja) {
    try {
        const sql = `DELETE FROM horario_funcionamento WHERE lojid = ?`
        const result = await mysql.execute(sql, [idLoja])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteHorarioFunc = deleteHorarioFunc


async function deleteLoja(idUsuario) {
    try {
        const sql = `DELETE FROM lojas WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteLoja = deleteLoja



async function insertLoja(venid, usuid, lojanome, cpf, cnpj, telefone, url, msgini, msgfim) {
    try {
        const sql = `INSERT INTO lojas (
                                        venid, usuid, lojnomeempresa, lojcpf, lojcnpj, 
                                        lojtelefone, lojurl, lojmsginicial, lojmsgfinal
                                       ) 
                     VALUES (?,?,?,?,?,?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                venid, usuid, lojanome, cpf, cnpj,
                telefone, url, 'Obrigada por pedir conosco',
                'Continuaremos o atendimento por meio desta conversa'
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertLoja = insertLoja



async function insertDesign(usuid, lojid) {
    try {
        const sql = `INSERT INTO design (usuid, lojid, descorpadrao, descorsegundaria, descorterciaria) 
                     VALUES (?,?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                usuid, lojid, '#0B0F12', '#ffffff', '#C85310'
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertDesign = insertDesign



async function insertFormaPgto(lojid) {
    try {
        const sql = `INSERT INTO formas_pagamentos (lojid, fpnome) VALUES (?,?)`
        const result = await mysql.execute(sql, [lojid, 'Dinheiro'])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertFormaPgto = insertFormaPgto



async function updateTaxaEntrega(lojtaxaentrega, lojid) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojtaxaentrega = ? 
                     WHERE  lojid = ?`
        const result = await mysql.execute(sql, [lojtaxaentrega, lojid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateTaxaEntrega = updateTaxaEntrega


async function updateTempoEspera(dados) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojtempomin = ?, lojtempomax = ?
                     WHERE  lojid = ?`
        const result = await mysql.execute(sql,
            [
                dados.lojtempomin, dados.lojtempomax, dados.lojid
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateTempoEspera = updateTempoEspera


async function updateDispLoja(status, lojid) {
    try {
        const sql = `UPDATE lojas 
                     SET    status = ? 
                     WHERE  lojid  = ?`
        const result = await mysql.execute(sql,
            [
                status, lojid
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateDispLoja = updateDispLoja



async function horarioFuncionamento(lojurl) {
    try {
        const sql = `SELECT hfid, hfdiasemana, hfhoraabertura, hfhorafechamento
                     FROM lojas l
                     LEFT JOIN horario_funcionamento h
                     ON l.lojid = h.lojid
                     WHERE l.lojurl = ?`
        const result = await mysql.execute(sql, [lojurl])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.horarioFuncionamento = horarioFuncionamento



async function obterFormaPgtoUrl(lojurl) {
    try {
        const sql = `SELECT fpid, fpnome 
                     FROM   formas_pagamentos fp
                     LEFT JOIN lojas AS l ON l.lojid = fp.lojid
                     WHERE l.lojurl = ?`
        const formapagamento = await mysql.execute(sql, [lojurl])

        return formapagamento

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterFormaPgtoUrl = obterFormaPgtoUrl



async function obterHorarioFuncionamento(url) {
    try {
        diaSemana = new Array("DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB")
        agora = new Date
        var horario = { h: agora.getHours() + ":" + String(agora.getMinutes()).padStart(2, "0") }

        //getDay é uma função da classe Date
        console.log(diaSemana[agora.getDay()])
        console.log(horario.h)
        console.log(diaSemana[1] && diaSemana[5] <= diaSemana[agora.getDay()])
        console.log(`${diaSemana[6]} à ${diaSemana[0]}`)

        console.log(horario)

        const sql = `SELECT lojnomeempresa, hfdiasemana, hfhoraabertura, hfhorafechamento
                     FROM lojas l
                     LEFT JOIN horario_funcionamento h
                     ON l.lojid = h.lojid
                     WHERE l.lojurl = ?
                     AND hfdiasemana = '${diaSemana[agora.getDay()]}'
                     AND '${horario.h}' BETWEEN hfhoraabertura AND hfhorafechamento`

        const result = await mysql.execute(
            sql,
            [
                url,
                diaSemana[agora.getDay()],
                horario.h
            ]
        )
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterHorarioFuncionamento = obterHorarioFuncionamento



async function cadastroFormaPgto(lojid, fpnome) {
    try {
        const sql = `INSERT INTO formas_pagamentos (lojid, fpnome) VALUES (?,?)`
        const formapagamento = await mysql.execute(sql, [lojid, fpnome])

        return formapagamento

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastroFormaPgto = cadastroFormaPgto



async function obterFormaPgtoPorNome(fpnome) {
    try {
        const sql = `SELECT * FROM formas_pagamentos WHERE fpnome = ?`
        const formapagamento = await mysql.execute(sql, [fpnome])

        return formapagamento

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterFormaPgtoPorNome = obterFormaPgtoPorNome



async function atualizarFormaPgto(fpnome, fpid) {
    try {
        const sql = `UPDATE formas_pagamentos
                     SET    fpnome = ?
                     WHERE  fpid = ?`
        const formapagamento = await mysql.execute(sql, [fpnome, fpid])

        return formapagamento

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarFormaPgto = atualizarFormaPgto



async function obterFormaPgtoPorId(fpid) {
    try {
        const sql = `SELECT * FROM formas_pagamentos WHERE fpid = ?`
        const result = await mysql.execute(sql, [fpid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterFormaPgtoPorId = obterFormaPgtoPorId



async function deleteFormaPgtoPorId(fpid) {
    try {
        const sql = `DELETE FROM formas_pagamentos WHERE fpid = ?`
        const result = await mysql.execute(sql, [fpid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteFormaPgtoPorId = deleteFormaPgtoPorId



async function cadastrarLogo(logo, usuid) {
    try {
        const sql = `UPDATE lojas SET lojlogo = ? WHERE usuid = ?`
        const result = await mysql.execute(sql, [logo, usuid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastrarLogo = cadastrarLogo



async function obterFormaPagamento(usuid) {
    try {
        const sql = `SELECT    fpid, fpnome 
                     FROM      formas_pagamentos fp
                     LEFT JOIN lojas    AS l ON l.lojid = fp.lojid
                     LEFT JOIN usuarios AS u ON u.usuid =  l.usuid
                     WHERE     l.usuid = ?`
        const result = await mysql.execute(sql, [usuid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterFormaPagamento = obterFormaPagamento



async function atualizarEndereco(dados, usuid) {
    try {
        const sql = `UPDATE enderecos SET  endcep = ?, enduf = ?, 
                            endcidade = ?, endbairro = ?, endrua = ?, 
                            endnumero = ?, endcomplemento = ?
                     WHERE  usuid     = ?`
        const result = await mysql.execute(sql,
            [
                dados.endcep, dados.enduf, dados.endcidade,
                dados.endbairro, dados.endrua, dados.endnumero,
                dados.endcomplemento, usuid
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarEndereco = atualizarEndereco



async function cadastroHorariodeFuncionamento(dados) {
    try {
        const sql = `INSERT INTO horario_funcionamento 
                    (lojid, hfdiasemana, hfhoraabertura, hfhorafechamento) 
                     VALUES (?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                dados.lojid, dados.hfdiasemana,
                dados.hfhoraabertura, dados.hfhorafechamento
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastroHorariodeFuncionamento = cadastroHorariodeFuncionamento



async function updateTelefone(lojtelefone, lojid) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojtelefone = ? 
                     WHERE  lojid = ?`
        const result = await mysql.execute(sql, [lojtelefone, lojid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateTelefone = updateTelefone


async function obterTotalLojas() {
    try {
        const sql = `SELECT COUNT(lojnomeempresa) AS total FROM lojas`
        const result = await mysql.execute(sql)
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterTotalLojas = obterTotalLojas


async function obterTotalSugestoes() {
    try {
        const sql = `SELECT COUNT(sugid) AS total FROM sugestoes`
        const result = await mysql.execute(sql)
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterTotalSugestoes = obterTotalSugestoes



async function obterCodigo(id) {
    try {
        const sql = 'SELECT lojcod FROM lojas WHERE lojid = ?';
        const result = await mysql.execute(sql, [id]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterCodigo = obterCodigo



async function obterCodigoLoja() {
    try {
        const sql = 'SELECT lojcod FROM lojas';
        const result = await mysql.execute(sql);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterCodigoLoja = obterCodigoLoja



async function gravarCodigo(lojid, usuid, lojcod) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojcod = ? 
                     WHERE  lojid  = ? 
                     AND    usuid = ?`;
        const result = await mysql.execute(sql, [lojcod, lojid, usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.gravarCodigo = gravarCodigo


async function atualizarCodigo(lojid, usuid, lojcod) {
    try {
        const sql = `UPDATE lojas 
                     SET    lojcod = ? 
                     WHERE  lojid  = ? 
                     AND    usuid = ?`;
        const result = await mysql.execute(sql, [lojcod, lojid, usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarCodigo = atualizarCodigo

