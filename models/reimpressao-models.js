const mysql = require('../mysql')


async function obterQtdePedImpressos(lojcod) {
    try {
        const sql = `SELECT COUNT(pedid)  AS total 
                     FROM         pedidos AS p
                     INNER JOIN   lojas   AS l ON p.lojid  = l.lojid
                     WHERE                        l.lojcod = ?`
        const result = await mysql.execute(sql, [lojcod])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdePedImpressos = obterQtdePedImpressos


async function obterNumPedidos(lojcod) {
    try {
        const sql = `SELECT     ped_cod 
                     FROM       pedidos   AS p
                     INNER JOIN lojas     AS l ON p.lojid  = l.lojid
                     WHERE                        l.lojcod = ?`
        const result = await mysql.execute(sql, [lojcod])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Error }
    }
}
module.exports.obterNumPedidos = obterNumPedidos


async function obterPedidoImpressos(lojcod, ped_cod) {
    try {
        const sql = `SELECT     imp_ped_string
                     FROM       reimpressao_pedido AS rp
                     INNER JOIN lojas     AS l ON l.lojid   = rp.lojid
                     INNER JOIN pedidos   AS p ON p.pedid   = rp.ped_id
                     WHERE                        l.lojcod  = ? 
                     AND                          p.ped_cod = ?`
        const result = await mysql.execute(sql, [lojcod, ped_cod])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Error }
    }
}
module.exports.obterPedidoImpressos = obterPedidoImpressos



async function cadastro(dados) {
    try {
        const sql = `INSERT INTO reimpressao_pedido (ped_id, lojid, imp_ped_string) VALUES (?,?,?)`
        const result = await mysql.execute(
            sql,
            [
                dados.pedidoid,
                dados.lojaid,
                dados.resultStringPedido
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Error }
    }
}
module.exports.cadastro = cadastro


