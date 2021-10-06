const mysql = require('../mysql')


async function buscaSenhaAtual(idUsuario) {
    try {
        const sql = `SELECT ususenha 
                     FROM   usuarios 
                     WHERE  usuid = ?`
        const result = await mysql.execute(sql, [idUsuario]);

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.buscaSenhaAtual = buscaSenhaAtual



function atualizaSenha(idUsuario, hash) {
    try {
        console.log("usuid: " + idUsuario, + " hash: " + hash)

        const sql = `UPDATE usuarios 
                     SET    ususenha = ? 
                     WHERE  usuid = ?`
        const result = mysql.execute(sql, [hash, idUsuario]);

        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizaSenha = atualizaSenha



async function obterUsuarioPorEmail(email) {
    try {
        const select = `SELECT * FROM usuarios WHERE usuemail = ?`
        const result = await mysql.execute(select, [email]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterUsuarioPorEmail = obterUsuarioPorEmail



function deleteVendedor(idUsuario) {
    try {
        const sql = `DELETE FROM vendedores WHERE usuid = ?`
        const result = mysql.execute(sql, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteVendedor = deleteVendedor


function deleteSugestao(idUsuario) {
    try {
        const sql = `DELETE FROM sugestoes WHERE usuid = ?`
        const result = mysql.execute(sql, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteSugestao = deleteSugestao


function deleteUsuario(idUsuario) {
    try {
        const sql = `DELETE FROM usuarios WHERE usuid = ?`
        const result = mysql.execute(sql, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.deleteUsuario = deleteUsuario


function obterUsuarios(idUsuario) {
    try {
        const select = `SELECT u.usuid,  u.usuemail,  u.usutelefone, v.vennome,
                               e.endcep, e.enduf,     e.endcidade,   e.endbairro, e.endcomplemento,
                               e.endrua, e.endnumero, e.endnome,     l.lojid,     l.lojnomeempresa,
                               l.lojcpf, l.lojcnpj,   l.lojtelefone, l.lojurl,    l.lojlogo,
                               l.lojtaxaentrega,      l.lojtempomin, l.lojtempomax, l.lojmsginicial, l.lojmsgfinal
                    FROM       usuarios     AS u 
                    LEFT JOIN  vendedores   AS v ON u.usuid = v.usuid 
                    LEFT JOIN  enderecos    AS e ON u.usuid = e.usuid 
                    LEFT JOIN  lojas        AS l ON v.venid = l.venid 
                    WHERE      u.usuid = ?`
        const result = mysql.execute(select, [idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterUsuarios = obterUsuarios



function obterTodosUsuarios() {
    try {
        const select = `SELECT u.usuid,  u.usuemail,  u.usutelefone, v.vennome,
                               e.endcep, e.enduf,     e.endcidade,   e.endbairro, e.endcomplemento,
                               e.endrua, e.endnumero, e.endnome,     l.lojid,     l.lojnomeempresa,
                               l.lojcpf, l.lojcnpj,   l.lojtelefone, l.lojurl,    l.lojlogo,
                               l.lojtaxaentrega,      l.lojtempomin, l.lojtempomax, l.lojmsginicial, l.lojmsgfinal
                    FROM       usuarios     AS u 
                    LEFT JOIN  vendedores   AS v ON u.usuid = v.usuid 
                    LEFT JOIN  enderecos    AS e ON u.usuid = e.usuid 
                    LEFT JOIN  lojas        AS l ON v.venid = l.venid`
        const result = mysql.execute(select);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterTodosUsuarios = obterTodosUsuarios



async function obterUsuarioParaValidacao(email) {
    try {
        const select = `SELECT * FROM usuarios u 
                        LEFT JOIN vendedores AS v ON u.usuid = v.usuid   
                        WHERE usuemail = ?`
        const result = await mysql.execute(select, [email]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterUsuarioParaValidacao = obterUsuarioParaValidacao



async function updateUsuToken(token, email) {
    try {
        const select = `UPDATE usuarios SET usuresettoken = ? WHERE usuemail = ?`
        const result = await mysql.execute(select, [token, email]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.updateUsuToken = updateUsuToken



async function obterToken(isUsuario) {
    try {
        const select = `SELECT * FROM usuarios WHERE usuid = ?`
        const result = await mysql.execute(select, [isUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterToken = obterToken



async function obterUsuarioPorId(isUsuario) {
    try {
        const select = `SELECT * FROM usuarios WHERE usuid = ?`
        const result = await mysql.execute(select, [isUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterUsuarioPorId = obterUsuarioPorId



async function resetUpdateSenha(hash, idUsuario) {
    try {
        const select = `UPDATE usuarios SET ususenha = ? WHERE usuid = ?`
        const result = await mysql.execute(select, [hash, idUsuario]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.resetUpdateSenha = resetUpdateSenha



async function insertUsuarios(email, telefone, hash) {
    try {
        const select = `INSERT INTO usuarios (usuemail, usutelefone, usuperfil, ususenha) VALUES (?,?,?,?)`
        const result = await mysql.execute(select, [email, telefone, 0, hash]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertUsuarios = insertUsuarios



async function insertVendedor(usuid, vennome) {
    try {
        const select = `INSERT INTO vendedores (usuid, vennome) VALUES (?,?)`
        const result = await mysql.execute(select, [usuid, vennome]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertVendedor = insertVendedor


async function insertEndereco(usuid, cep, uf, cid, bairro, rua, num, endnome, endcomp) {
    try {
        const select = `INSERT INTO enderecos (
                                               usuid, endcep, enduf, endcidade, endbairro,
                                               endrua, endnumero, endnome, endcomplemento
                                               ) 
                        VALUES (?,?,?,?,?,?,?,?,?)`
        const result = await mysql.execute(select,
            [
                usuid, cep, uf, cid, bairro,
                rua, num, endnome, endcomp
            ]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.insertEndereco = insertEndereco


async function obterDadosParaLogin(email) {
    try {
        const select = `SELECT u.ususenha, u.usuid, u.usuemail, v.vennome, l.lojid 
                        FROM vendedores AS v
                        LEFT JOIN usuarios AS u ON u.usuid = v.usuid
                        LEFT JOIN lojas    AS l ON v.venid = l.venid                     
                        WHERE (u.usuemail = ?)`
        const result = await mysql.execute(select, [email]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterDadosParaLogin = obterDadosParaLogin


//recupera do banco o email do usuario enome do vendedor que esta logado
async function obterDadosUsuarioLogado(usuid) {
    try {
        const select = `SELECT    usuemail, vennome 
                        FROM      usuarios AS u
                        LEFT JOIN vendedores AS v ON u.usuid = v.usuid
                        WHERE     u.usuid = ?`
        const result = await mysql.execute(select, [usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterDadosUsuarioLogado = obterDadosUsuarioLogado



async function atualizarUsuario(vennome, usutelefone, usuid) {
    try {
        const select = `UPDATE    usuarios u
                        LEFT JOIN vendedores v on v.usuid  = u.usuid
                        SET v.vennome = ?, u.usutelefone = ?
                        WHERE u.usuid = ?`
        const result = await mysql.execute(select, [vennome, usutelefone, usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.atualizarUsuario = atualizarUsuario



async function obterUrlPerfil(usuid) {
    try {
        const select = `SELECT usuperfil FROM usuarios WHERE usuid = ?`
        const result = await mysql.execute(select, [usuid]);
        return result

    } catch (e) {
        console.log(e)
        return { mensagem: "Algo deu errado!", Erro: e }
    }
}
module.exports.obterUrlPerfil = obterUrlPerfil

