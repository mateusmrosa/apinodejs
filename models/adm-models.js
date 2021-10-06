const mysql = require('../mysql')


async function buscaDadosAdm() {
    try {
        const sql = `SELECT u.usuid, l.lojnomeempresa, l.lojurl
                     FROM   usuarios AS u
                     JOIN   lojas    AS l ON u.usuid = l.usuid`
        const result = await mysql.execute(sql);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.buscaDadosAdm = buscaDadosAdm



async function obterDados() {
    try {
        const sql = `SELECT u.usuid, v.vennome, u.usuemail, l.lojnomeempresa, 
                            s.sugtitulo, s.sugtexto, s.sugdata
                     FROM   vendedores AS v
                     JOIN   usuarios   AS u ON u.usuid = v.usuid
                     JOIN   lojas      AS l ON u.usuid = l.usuid
                     JOIN   sugestoes  AS s ON u.usuid = s.usuid`
        const result = await mysql.execute(sql);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterDados = obterDados

