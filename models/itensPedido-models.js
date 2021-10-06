const mysql = require('../mysql')


async function cadastro(pedid, prodid, promoid, qtde, valor) {
    try {
        const sql = `INSERT INTO itens_pedido (pedid, prodid, promoid, ite_qtde, ite_valor_total) VALUES (?,?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                pedid, prodid, promoid, qtde, valor
            ]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastro = cadastro

