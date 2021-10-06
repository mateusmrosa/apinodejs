const mysql = require('../mysql')


async function deleteEnderecoPorUsuario(idUsuario) {
    try {
        const sql = `DELETE FROM enderecos WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteEnderecoPorUsuario = deleteEnderecoPorUsuario

