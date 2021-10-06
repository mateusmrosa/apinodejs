const mysql = require('../mysql')


async function deleteProduto(idUsuario) {
    try {
        const sql = `DELETE FROM produtos WHERE usuid = ?`;
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteProduto = deleteProduto


async function cadastrar(dados, idLoja) {
    try {
        const sql = `INSERT INTO acrescimo (usuid, lojid, catprodid, acrnome, acrvalor, status) 
                     VALUES (?,?,?,?,?,?)`;
        const result = await mysql.execute(
            sql,
            [
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



async function qtdeProdPorCategoria(catprodid) {
    try {
        const sql = 'SELECT COUNT(catprodid) AS total FROM produtos WHERE catprodid = ?';
        const result = await mysql.execute(sql, [catprodid]);

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.qtdeProdPorCategoria = qtdeProdPorCategoria



async function buscarId(idProduto) {
    try {
        const sql = `SELECT * FROM produtos WHERE prodid = ?`
        const result = await mysql.execute(sql, [idProduto])

        console.log(result)

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.buscarId = buscarId



async function atualizar(dados) {
    try {
        const sqlUpdate = `UPDATE produtos p
                           SET    prodnome = ?, proddescricao = ?, prodvalor = ?,
                                  status = ?
                           WHERE  p.prodid = ?`
        const result = await mysql.execute(sqlUpdate,
            [
                dados.prodnome, dados.proddescricao, dados.prodvalor,
                dados.status, dados.prodid
            ])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizar = atualizar



async function obterQtdeProdUsuario(idUsuario) {
    try {
        const sql = `SELECT COUNT(prodnome) AS total FROM produtos WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeProdUsuario = obterQtdeProdUsuario



async function obterProdutosPorNomeIdUsuario(produto, idUsuario) {
    try {
        const sql = `SELECT * FROM produtos WHERE (prodnome = ?) AND (usuid = ?)`
        const result = await mysql.execute(sql, [produto, idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterProdutosPorNomeIdUsuario = obterProdutosPorNomeIdUsuario



async function insertProdutos(dados, lojid) {
    try {
        const sql = `INSERT INTO produtos (usuid, lojid, catprodid, prodnome, proddescricao, prodvalor, status)
                     VALUES (?,?,?,?,?,?,?)`
        const result = await mysql.execute(sql,
            [
                dados.usuid, lojid, dados.catprodid, dados.prodnome, dados.proddescricao, dados.prodvalor, dados.status
            ])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertProdutos = insertProdutos



async function obterProdutos(usuid) {
    try {
        const sql = `SELECT u.usuid     AS idusuario, c.catprodid, c.catprodnome 
                            AS categoria, p.prodid    AS idproduto, p.prodnome  AS produto, p.proddescricao 
                            AS descricao, p.prodvalor AS valor, p.status
                     FROM      produtos            AS p
                     LEFT JOIN usuarios            AS u ON u.usuid     = p.usuid
                     LEFT JOIN categorias_produtos AS c ON c.catprodid = p.catprodid
                     LEFT JOIN vendedores          AS v ON u.usuid     = v.usuid
                     WHERE u.usuid = ?`
        const result = await mysql.execute(sql, [usuid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterProdutos = obterProdutos



async function deletePorIdProd(idProduto) {
    try {
        const sql = `DELETE FROM produtos WHERE prodid = ?`
        const result = await mysql.execute(sql, [idProduto])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deletePorIdProd = deletePorIdProd



async function updateDispProduto(status, prodid) {
    try {
        const sql = `UPDATE produtos SET status = ? WHERE  prodid = ?`
        const result = await mysql.execute(sql, [status, prodid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateDispProduto = updateDispProduto



async function obterProdutosPorCategoria(idCategoria) {
    try {
        const sql = `SELECT    p.prodid, prodnome, proddescricao,
                               prodvalor, i.imgprocaminho
                     FROM      produtos p
                     LEFT JOIN imagens_produtos    AS i ON p.prodid    = i.prodid
                     LEFT JOIN categorias_produtos AS c ON c.catprodid = p.catprodid
                     WHERE     c.catprodid = ?
                     AND       c.status = '1' AND p.status = '1'`
        const result = await mysql.execute(sql, [idCategoria])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterProdutosPorCategoria = obterProdutosPorCategoria







