const mysql = require('../mysql')


async function atualizar(dados) {
    try {
        const sqlUpdate = `UPDATE promocoes pm
                           SET    promonome       = ?, 
                                  promodescricao  = ?,
                                  promovalortotal = ?
                           WHERE  pm.promoid      = ?
                           AND    pm.usuid        = ?`
        const result = await mysql.execute(sqlUpdate,
            [
                dados.promonome, dados.promodescricao, dados.promovalortotal,
                dados.promoid, dados.usuid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizar = atualizar


async function deleteImgPromocao(idPromocao) {
    try {
        const sql = `DELETE FROM imagens_promocao WHERE promoid = ?`
        const result = await mysql.execute(sql, [idPromocao])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteImgPromocao = deleteImgPromocao


async function deletePromocao(idUsuario) {
    try {
        const sql = `DELETE FROM promocoes WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deletePromocao = deletePromocao



async function obterQtdePromoUsuario(idUsuario) {
    try {
        const sql = `SELECT COUNT(promonome) AS total FROM promocoes WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdePromoUsuario = obterQtdePromoUsuario



async function obterIdLoja(idUsuario) {
    try {
        const sql = `SELECT lojid FROM lojas WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterIdLoja = obterIdLoja



async function insertPromocao(idLoja, dados) {
    try {
        const sql = `INSERT INTO promocoes (usuid, lojid, promonome, promovalortotal, 
                                 promodescricao, status)
                     VALUES (?,?,?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                dados.usuid, idLoja, dados.promonome,
                dados.promovalortotal, dados.promodescricao, dados.status
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertPromocao = insertPromocao


async function obterPromocao(idUsuario) {
    try {
        const sql = `SELECT * FROM promocoes WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterPromocao = obterPromocao



async function deletePromocaoPorId(idPromocao) {
    try {
        const sql = `DELETE FROM promocoes WHERE promoid = ?`
        const result = await mysql.execute(sql, [idPromocao])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deletePromocaoPorId = deletePromocaoPorId



async function updateDispPromocao(status, promoid) {
    try {
        const sql = `UPDATE promocoes SET status = ? WHERE  promoid = ?`
        const result = await mysql.execute(sql, [status, promoid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateDispPromocao = updateDispPromocao

