const mysql = require('../mysql')


async function deleteAcrescimo(idUsuario) {
    try {
        const sql = `DELETE FROM acrescimo WHERE  usuid = ?`
        const result = await mysql.execute(sql, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteAcrescimo = deleteAcrescimo


async function cadastrar(dados, idLoja) {
    try {
        const sql = `INSERT INTO acrescimo (usuid, lojid, catprodid, acrnome, acrvalor, status) 
                     VALUES (?,?,?,?,?,?)`;
        const result = await mysql.execute(
            sql, [
                dados.usuid, idLoja[0].lojid, dados.catprodid,
                dados.acrnome, dados.acrvalor, dados.status
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastrar = cadastrar



async function obter(idUsuario) {
    try {
        const sql = `SELECT a.acrid, a.usuid, a.acrnome, a.acrvalor, a.status, c.catprodid, c.catprodnome
                     FROM acrescimo AS a
                     LEFT JOIN categorias_produtos AS c ON c.catprodid = a.catprodid
                     WHERE a.usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obter = obter



async function atualizar(dados) {
    try {
        const sql = `UPDATE acrescimo
                     SET acrnome = ?, acrvalor = ?, status = ?
                     WHERE acrid = ?`
        const result = await mysql.execute(
            sql, [
                dados.acrnome, dados.acrvalor,
                dados.status, dados.acrid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizar = atualizar


async function deletar(idAcrescimo) {
    try {
        const sql = `DELETE FROM acrescimo WHERE acrid = ?`
        const result = await mysql.execute(sql, [idAcrescimo])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deletar = deletar



async function obterQtdeAcresUsuario(idUsuario) {
    try {
        const sql = `SELECT COUNT(acrnome) AS total FROM acrescimo WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeAcresUsuario = obterQtdeAcresUsuario


