const mysql = require('../mysql')



async function obterQtdeCategorias(idUsuario) {
    try {
        const sql = `SELECT COUNT(catprodnome) AS total 
                     FROM categorias_produtos
                     WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeCategorias = obterQtdeCategorias




async function obterQtdeProdutos(idUsuario) {
    try {
        const sql = `SELECT COUNT(prodnome) AS total 
                     FROM produtos
                     WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeProdutos = obterQtdeProdutos



async function obterQtdeAcrescimos(idUsuario) {
    try {
        const sql = `SELECT COUNT(acrnome) AS total 
                     FROM acrescimo
                     WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeAcrescimos = obterQtdeAcrescimos



async function obterQtdePromocoes(idUsuario) {
    try {
        const sql =  `SELECT COUNT(promonome) AS total 
                      FROM promocoes
                      WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdePromocoes = obterQtdePromocoes