const mysql = require('../mysql')
// const lojasModels = require('../models/lojas-models')


async function deleteCategoriaPorUsuario(idUsuario) {
    try {
        const sql = 'DELETE FROM categorias_produtos WHERE usuid = ?';
        const result = await mysql.execute(sql, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteCategoriaPorUsuario = deleteCategoriaPorUsuario


async function validaDuplicidade(catprodnome, usuid) {
    try {
        const sql = 'SELECT * FROM categorias_produtos WHERE (catprodnome = ?) AND (usuid = ?)';
        const result = await mysql.execute(sql, [catprodnome, usuid]);

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.validaDuplicidade = validaDuplicidade



async function cadastro(dados, idLoja) {
    try {

        const sql = 'INSERT INTO categorias_produtos (lojid, usuid, catprodnome, status, catprodmeia) VALUES (?,?,?,?,?)';
        const result = await mysql.execute(
            sql,
            [
                idLoja, dados.usuid, dados.catprodnome,
                dados.status, dados.catprodmeia
            ]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.cadastro = cadastro



async function obterCategoriaUsuario(usuid) {
    try {
        const sql = 'SELECT * FROM categorias_produtos WHERE usuid = ?';
        const result = await mysql.execute(sql, [usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterCategoriaUsuario = obterCategoriaUsuario



async function categoriaExistente(catprodid) {
    try {
        const sql = 'SELECT * FROM categorias_produtos WHERE catprodid = ?';
        const result = await mysql.execute(sql, [catprodid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.categoriaExistente = categoriaExistente



async function deleteCategoria(catprodid) {
    try {
        const sql = 'DELETE FROM categorias_produtos WHERE catprodid = ?';
        const result = await mysql.execute(sql, [catprodid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteCategoria = deleteCategoria



async function selectCategoriaPorUsuario(catprodid, usuid) {
    try {
        const sql = `SELECT * FROM categorias_produtos 
                     WHERE (catprodid = ?) 
                     AND (usuid = ?)`;
        const result = await mysql.execute(sql, [catprodid, usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.selectCategoriaPorUsuario = selectCategoriaPorUsuario



async function atualizar(dados) {
    try {
        const sql = `UPDATE categorias_produtos
                     SET    catprodnome = ?, status = ?, catprodmeia = ?
                     WHERE  catprodid   = ? AND (usuid = ?)`;
        const result = await mysql.execute(
            sql,
            [
                dados.catprodnome, dados.status, dados.catprodmeia,
                dados.catprodid, dados.usuid
            ]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizar = atualizar



async function atualizarDisponibilidade(status, catprodid) {
    try {
        const sql = `UPDATE categorias_produtos 
                     SET    status    = ? 
                     WHERE  catprodid = ?`
        const result = await mysql.execute(sql, [status, catprodid])

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarDisponibilidade = atualizarDisponibilidade


//obtem as categorias disponiveis por usuario
async function obterCatDispPorUsuario(usuid, status) {
    try {
        const sql = `SELECT  catprodid, catprodnome, catprodmeia
                     FROM    categorias_produtos 
                     WHERE   usuid = ?
                     AND     status = '1'
                     ORDER BY catprodnome`
        const result = await mysql.execute(sql, [usuid, status])
        console.log(result)
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterCatDispPorUsuario = obterCatDispPorUsuario


async function obterQtdeCatUsuario(idUsuario) {
    try {
        const sql = `SELECT COUNT(catprodnome) AS total FROM categorias_produtos WHERE usuid = ?`
        const result = await mysql.execute(sql, [idUsuario])
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterQtdeCatUsuario = obterQtdeCatUsuario



async function obterCategoriasPorLoja(id) {
    try {
        const sql = `SELECT catprodid, catprodnome, catprodmeia
                     FROM   categorias_produtos 
                     WHERE  lojid = ?
                     AND status = '1'
                     ORDER BY catprodnome`
        const result = await mysql.execute(sql, [id])

        return result

    } catch (e) {
        console.log(e)
        return response = { msg: "Algo deu errado", Erro: e }
    }
}
module.exports.obterCategoriasPorLoja = obterCategoriasPorLoja


