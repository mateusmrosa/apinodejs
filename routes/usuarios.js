const express = require('express')
const { response, request } = require('../app')
const router = express.Router()
const { query } = require('express')
const autenticacao = require('../middleware/autenticacao')
const usuariosController = require('../controllers/usuarios-controller')


router.post(
    '/cadastro',
    usuariosController.cadastro
)

router.post(
    '/ativarconta',
    usuariosController.ativarconta
)

router.put(
    '/esquecisenha',
    usuariosController.esquecisenha
)

router.put(
    '/resetsenha',
    usuariosController.resetsenha
)

router.post(
    '/login',
    usuariosController.login
)

router.put(
    '/atualizar',
    autenticacao.verifyJWT,
    usuariosController.atualizar
)

router.delete(
    '/delete',
    autenticacao.verifyJWT,
    usuariosController.delete
)

router.post(
    '/obterusuarios',
    autenticacao.verifyJWT,
    usuariosController.obterUsuario
)


router.post(
    '/obtertodosusuarios',
    usuariosController.obterTodosUsuarios
)


router.post(
    '/atualizarsenha',
    autenticacao.verifyJWT,
    usuariosController.atualizarSenha
)



//exporta o modulo router
module.exports = router




