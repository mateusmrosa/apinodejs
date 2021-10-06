const mysql = require('../mysql')


async function atualizar(combos) {
    try {
        const updateCombo = `UPDATE combo
                             SET    comqtde = ?
                             WHERE  promoid  = ?
                             AND    prodid   = ?`

        var result = await mysql.execute(
            updateCombo,
            [
                combos.comqtde, combos.promoid, combos.prodid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizar = atualizar


async function insertCombo(idPromocao, prodid, comqtde) {
    try {
        const sql = `INSERT INTO combo (promoid, prodid, comqtde) VALUES (?,?,?)`
        var result = await mysql.execute(
            sql,
            [
                idPromocao, prodid, comqtde
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertCombo = insertCombo



async function obterComboPromocao(idPromocao) {
    try {
        const sql = `SELECT c.promoid, c.prodid, c.comqtde, p.prodnome FROM combo c
                     LEFT JOIN produtos p ON p.prodid = c.prodid
                     WHERE promoid = ?`
        var result = await mysql.execute(sql, [idPromocao])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterComboPromocao = obterComboPromocao



async function deleteCombo(promoid) {
    try {
        const sql = `DELETE FROM combo 
                     WHERE promoid = ?`;
        const result = await mysql.execute(sql, [promoid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteCombo = deleteCombo


async function deleteComboPorIdPromo(id) {
    try {
        const sql = `DELETE FROM combo WHERE promoid = ?`
        const result = await mysql.execute(sql, [id])

        return result

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
module.exports.deleteComboPorIdPromo = deleteComboPorIdPromo