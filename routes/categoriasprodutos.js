const express = require('express')
const { response, request } = require('../app')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const categoriasProdutosController = require('../controllers/categoriasprodutos-controller')


router.post(
    '/cadastro',
    autenticacao.verifyJWT,
    categoriasProdutosController.cadastro
)

router.post(
    '/obtercategoriausuario',
    autenticacao.verifyJWT,
    categoriasProdutosController.obterCategoriaUsuario
)

router.delete(
    '/delete/:catprodid',
    autenticacao.verifyJWT,
    categoriasProdutosController.delete
)

router.put(
    '/atualizar',
    autenticacao.verifyJWT,
    categoriasProdutosController.atualizar
)

router.put(
    '/updatedipscategoria',
    autenticacao.verifyJWT,
    categoriasProdutosController.updateDispCategoria
)

router.post(
    '/obtercategoriadisponivel',
    autenticacao.verifyJWT,
    categoriasProdutosController.obterCategoriasDisponiveis
)



module.exports = router
