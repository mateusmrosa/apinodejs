const mysql = require('../mysql')


async function deleteImgProduto(idProduto) {
    try {
        const sql = `DELETE FROM imagens_produtos 
                     WHERE  prodid = ?`
        const result = await mysql.execute(sql, [idProduto])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteImgProduto = deleteImgProduto


async function updateImgProduto(idProduto, imagem) {
    try {
        const sql = `UPDATE imagens_produtos 
                     SET    imgprocaminho = ?
                     WHERE  prodid = ?`
        const result = await mysql.execute(sql, [imagem, idProduto])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateImgProduto = updateImgProduto


async function cadastrarImgPromoId(idProduto, imagens) {
    try {
        const sql = `INSERT INTO imagens_promocao (promoid, imgpromocaminho) VALUES (?,?)`
        const result = await mysql.execute(sql, [idProduto, imagens])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastrarImgPromoId = cadastrarImgPromoId



async function obterPorPromocao(id) {
    try {
        const sql = `SELECT *
                     FROM imagens_promocao 
                     WHERE promoid = ?`
        const result = await mysql.execute(sql, [id])
        console.log(result)

        return result

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
module.exports.obterPorPromocao = obterPorPromocao



async function obterPorIdProduto(idProduto) {
    try {
        const sql = `SELECT * FROM imagens_produtos 
                     WHERE prodid = ?`
        const result = await mysql.execute(sql, [idProduto])
        console.log(result)

        return result

    } catch (e) {
        console.log(e)

        return res.status(400).json({
            mensagem: "Algo deu errado!",
            Erro: e
        })
    }
}
module.exports.obterPorIdProduto = obterPorIdProduto




async function obterPorIdProdutoAndIdImg(idProduto, idImg) {
    try {
        const sql = `SELECT * FROM imagens_produtos WHERE (prodid = ?) AND (imgproid = ?)`
        const result = await mysql.execute(sql, [idProduto, idImg])
        console.log(result)

        return result

    } catch (e) {
        console.log(e)

        return res.status(400).json({
            mensagem: "Algo deu errado!",
            Erro: e
        })
    }
}
module.exports.obterPorIdProdutoAndIdImg = obterPorIdProdutoAndIdImg



async function atualizarImgProduto(imagem, prodid, imgproid) {
    try {
        const sql = `UPDATE imagens_produtos 
                     SET imgprocaminho = ?  
                     WHERE (prodid = ?) 
                     AND (imgproid = ?)`
        const result = await mysql.execute(sql, [imagem, prodid, imgproid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarImgProduto = atualizarImgProduto




async function updateImgPromocao(imagem, promid) {
    try {
        const sql = `UPDATE imagens_promocao 
                     SET imgpromocaminho = ?
                     WHERE promoid = ?`
        const result = await mysql.execute(sql, [imagem, promid])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateImgPromocao = updateImgPromocao




async function insertImgProdutos(prodid, imagem) {
    try {
        const sql = `INSERT INTO imagens_produtos (prodid, imgprocaminho) VALUES (?,?)`
        const result = await mysql.execute(sql, [prodid, imagem])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertImgProdutos = insertImgProdutos



async function deleteImagemPromocao(id) {
    try {
        const sql = `DELETE FROM imagens_promocao WHERE promoid = ?`
        const result = await mysql.execute(sql, [id])

        return result

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
module.exports.deleteImagemPromocao = deleteImagemPromocao