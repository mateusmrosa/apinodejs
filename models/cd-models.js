const mysql = require('../mysql')


async function acrescimoPorCategoriaCardapio(catprodid) {
    try {
        const sql = `SELECT * FROM acrescimo WHERE (catprodid = ?)`
        const resultado = await mysql.execute(sql, [catprodid])

        return resultado

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.acrescimoPorCategoriaCardapio = acrescimoPorCategoriaCardapio


async function obterInforCardapio(url) {
    try {
        const query = ` SELECT    u.usuid, l.lojid, lojnomeempresa, endrua, endnumero, 
                                  endbairro, endcidade, enduf, lojtelefone, lojtaxaentrega,
                                  lojtempomin, lojtempomax, l.lojlogo, l.status, d.descorpadrao,
                                  d.descorsegundaria, d.descorterciaria, l.lojmsginicial, l.lojmsgfinal
                        FROM      lojas l
                        LEFT JOIN usuarios          AS u ON u.usuid  = l.usuid
                        LEFT JOIN enderecos         AS e ON e.usuid  = u.usuid
                        LEFT JOIN design            AS d ON d.usuid  = u.usuid
                        WHERE (lojurl = ?)`
        const resultado = await mysql.execute(query, [url])

        return resultado

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterInforCardapio = obterInforCardapio


async function obterPromocaoPorLoja(id) {
    try {
        const sql = `SELECT    pm.promoid, promonome, promodescricao, promovalortotal, i.imgpromocaminho
                     FROM      promocoes pm
                     LEFT JOIN imagens_promocao AS i ON pm.promoid = i.promoid
                     WHERE lojid = ? AND pm.status = 1`
        const result = await mysql.execute(sql, [id])

        return result

    } catch (e) {
        console.log(e)
        return response = { msg: "Algo deu errado", Erro: e }
    }
}
module.exports.obterPromocaoPorLoja = obterPromocaoPorLoja