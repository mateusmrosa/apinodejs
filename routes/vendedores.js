const express = require('express')
//const { response, report } = require('../app')
const router = express.Router()
const mysql = require('../mysql').conexao
// const jwt = require('jsonwebtoken')
// const { query } = require('express')
// const { route } = require('./usuarios')
const autenticacao = require('../middleware/autenticacao') //arquivo com metodo que faz a verificação de autenticação com (jwt)

//POST ROTA => /vendedores/cadastro
//INSERE UM VENDEDOR (metodo OK)
router.post('/cadastro', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }

        if (req.body.ventelefone.length > 11) {
            return res.status(400).json({ mensagem: "Telefone: máximo 11 caracteres!" })
        }

        if (isNaN(req.body.ventelefone)) {
            return res.status(400).json({ mensagem: "Não é um número de telefone" })
        }

        conn.query(
            `select * from vendedores where usuid = ?`, [req.body.usuid], (error, resultado) => {
                conn.release()
                console.log(resultado.length)
                if (error) { return res.status(500).send({ error: error, }) }
                if (resultado.length > 0) {
                    return res.status(400).json({
                        mensagem: "Não pode adicionar usuário na tabela vendedor, pois ele não existe!"
                    })
                } else {
                    conn.query(
                        'INSERT INTO vendedores (usuid, vennome, ventelefone) VALUES (?,?,?)',
                        [
                            req.body.usuid,
                            req.body.vennome,
                            req.body.ventelefone
                        ],
                        (error, results) => {
                            if (error) { return res.status(500).send({ error: error, }) }
                            const response = {
                                mensagem: "Vendedor cadastrado com sucesso!",
                                vendedorCriado: {
                                    venid: results.insertId,
                                    vennome: req.body.vennome,
                                    ventelefone: req.body.ventelefone,
                                    usuario: { usuid: req.body.usuid }
                                }
                            }
                            return res.status(201).send({ response })
                        }
                    )

                }
            })
    })
})

//GET ROTA => /vendedores
//RETORNA TODOS OS VENDEDORES (metodo OK)
router.get('/', autenticacao.verifyJWT, (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `SELECT    v.venid,
                       v.vennome,
                       u.usuemail,
                       u.usutelefone,
                       u.usuid
             FROM      vendedores AS v
             LEFT JOIN usuarios   AS u ON u.usuid = v.usuid`,
            (error, resultado, field) => {
                if (error) { return res.status(500).send({ error: error }) }
                const response = {
                    vendedores: resultado.map(vend => {
                        return {
                            venid: vend.venid,
                            vennome: vend.vennome,
                            usuario: {
                                usuid: vend.usuid,
                                usuemail: vend.usuemail,
                                usutelefone: vend.usutelefone

                            }
                        }
                    })
                }
                return res.status(200).send({ response })
            }
        )
    })
})


//GET ROTA => /vendedores/10
//RETORNA UM VENDEDOR (metodo OK)
router.get('/:venid', autenticacao.verifyJWT, (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        conn.query(
            `SELECT     v.venid,
                        v.vennome,
                        u.usutelefone,
                        u.usuemail, 
                        u.usuid
             FROM       vendedores AS v
             LEFT JOIN  usuarios   AS u ON u.usuid = v.usuid
             WHERE venid = ?`,
            [req.params.venid],
            (error, resultado, filed) => {
                if (error) { return res.status(500).send({ error: error }) }

                if (resultado.length == 0) {
                    console.log(resultado.length)
                    return res.status(404).send({
                        mensagem: "Vendedor não existe"
                    })
                }
                const response = {
                    vendedor: {
                        venid: resultado[0].venid,
                        vennome: resultado[0].vennome,
                        usuario: {
                            usuid: resultado[0].usuid,
                            usuemail: resultado[0].usuemail,
                            usutelefone: resultado[0].usutelefone
                        }
                    }
                }
                return res.status(200).json({ response })
            }
        )
    })
})


//PATCH ROTA => /vendedores
//ATUALIZA INFOR DE UM VENDEDOR (metodo OK)
router.patch('/', autenticacao.verifyJWT, (req, res, next) => {
    mysql.getConnection((error, conn) => {
        if (error) { return res.status(500).send({ error: error }) }
        const sql = `UPDATE vendedores SET vennome = ?, usuid = ? WHERE venid = ?`
        conn.query(
            sql, [req.body.vennome, req.body.usuid, req.body.venid], (error, result, field) => {
                conn.release()
                if (error) { return res.status(500).json({ error: error }) }

                console.log(req.body.vennome, req.body.venid, req.body.usuid)
                console.log(sql)

                const response = {
                    mensagem: "Vendedor atualizado com sucesso!",
                    vendedorAtualizado: {
                        vendid: req.body.venid,
                        vennome: req.body.vennome,
                    }
                }
                return res.status(202).json({ response })
            })
    })
})



module.exports = router



