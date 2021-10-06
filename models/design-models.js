const mysql = require('../mysql')


async function deleteDesignPorUsuario(idUsuario) {
    try {
        const sql = `DELETE FROM design WHERE usuid = ?`;
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteDesignPorUsuario = deleteDesignPorUsuario


async function obter(idUsu) {
    try {
        const sql = `SELECT * FROM design WHERE usuid = ?`;
        const result = await mysql.execute(sql, [idUsu])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obter = obter


async function atualizar(dados) {
    try {
        const sql = `UPDATE design SET descorpadrao = ?, 
                            descorsegundaria = ?, descorterciaria = ?
                     WHERE (desid = ?) AND (usuid = ?)`;
        const result = await mysql.execute(
            sql,
            [
                dados.descorpadrao, dados.descorsegundaria,
                dados.descorterciaria, dados.desid, dados.usuid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizar = atualizar


async function deletar(id) {
    try {
        const sql = `DELETE FROM design WHERE desid = ?`;
        const result = await mysql.execute(sql, [id])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deletar = deletar



async function validaExistente(id) {
    try {
        const sql = `SELECT * FROM design WHERE desid = ?`;
        const result = await mysql.execute(sql, [id])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.validaExistente = validaExistente