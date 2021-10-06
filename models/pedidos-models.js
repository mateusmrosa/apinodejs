const mysql = require('../mysql')


async function updateFlagPedImpresso(pedid, lojid) {
    try {
        const sql = `UPDATE pedidos
                     SET ped_flag_impressao = ?
                     WHERE ped_flag_impressao = 0`
        const result = await mysql.execute(sql, [1]);
        return result
    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateFlagPedImpresso = updateFlagPedImpresso



async function obterPdf() {
    try {
        const sql = `SELECT pedid, lojid, ped_caminho_pdf
                     FROM   pedidos
                     WHERE  ped_flag_impressao = 0`
        const result = await mysql.execute(sql)
        return result
    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterPdf = obterPdf


async function ultimoCodPedido() {
    try {
        const sql = `SELECT ped_cod 
                     FROM pedidos 
                     ORDER BY ped_cod DESC limit 1 `
        const result = await mysql.execute(sql)

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.ultimoCodPedido = ultimoCodPedido



async function cadastro(lojid, dados) {
    try {
        var array = dados.ped_string
        //para dar um split precisa primeiro converter o array para string
        var ped_string = array

        console.log(ped_string)

        agora = new Date
        var horario = { h: agora.getHours() + ":" + String(agora.getMinutes()).padStart(2, "0") }
        let data = new Date();

        ped_cod = await obterQtdePedidos(lojid)

        console.log(ped_cod[0].total)

        ped_cod = ped_cod[0].total + 1

        const sql = `INSERT INTO pedidos (lojid, ped_forma_pgto, ped_nome_cliente, ped_end_logradouro, ped_end_num,
                                          ped_end_bairro, ped_end_cidade, ped_telefone, ped_data, ped_hora, 
                                          ped_cod, ped_string, ped_flag_impressao)
                     VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                lojid, dados.ped_forma_pgto, dados.ped_nome_cliente, dados.ped_end_logradouro, dados.ped_end_num,
                dados.ped_end_bairro, dados.ped_end_cidade, dados.ped_telefone, data, horario.h,
                ped_cod, `Número Pedido: ${ped_cod}. ${ped_string}`, 0
            ]);

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastro = cadastro


async function obterQtdeTotPedidos() {
    try {
        const sql = `SELECT COUNT(pedid) AS total 
                     FROM pedidos`
        const result = await mysql.execute(sql)

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeTotPedidos = obterQtdeTotPedidos


async function obterQtdePedidos(lojid) {
    try {
        const sql = `SELECT COUNT(pedid) AS total 
                     FROM pedidos
                     WHERE lojid = ? `
        const result = await mysql.execute(sql, [lojid])
        console.log(result)
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdePedidos = obterQtdePedidos


/*seleciona o maior(ultimo) id do pedido que tenha o ped_flag_impressao = 0 
  e que seja daquele loja conforme id no parametro*/
async function obterStringPedido(lojid) {
    try {
        const sql = `SELECT pedid, lojid, ped_string, ped_flag_impressao
                     FROM   pedidos 
                     WHERE  pedid = (SELECT max(pedid) FROM pedidos WHERE lojid = ? AND ped_flag_impressao = 0)`
        const result = await mysql.execute(sql, [lojid])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterStringPedido = obterStringPedido



async function updateFlagImpressao(lojid, idPedido) {
    try {
        const sql = `UPDATE pedidos
                     SET    ped_flag_impressao = 1
                     WHERE  ped_flag_impressao = 0
                     AND    lojid = ?
                     AND    pedid = ?`
        const result = await mysql.execute(sql, [lojid, idPedido])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateFlagImpressao = updateFlagImpressao