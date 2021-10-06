const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const produtosController = require('../controllers/produtos-controller')
const fileUploads = require('../file-uploads/uploads')


router.post('/cadastro',
    fileUploads.upload.array('imgprocaminho'),
    autenticacao.verifyJWT,
    produtosController.cadastro
)

router.post('/obterprodutos',
    //autenticacao.verifyJWT,
    produtosController.obterProdutos
)


 router.post('/obterprodporcategoria',
     autenticacao.verifyJWT,
     produtosController.obterProdutosPorCategoria
)


router.post('/prodporcategoriacardapio',
    produtosController.produtosPorCategoriaCardapio
)


router.delete('/delete/:prodid',
    autenticacao.verifyJWT,
    produtosController.delete
)


router.put('/atualizar',
    autenticacao.verifyJWT,
    produtosController.atualizar
)


router.put('/updatedispproduto',
    autenticacao.verifyJWT,
    produtosController.updateDispProduto
)

module.exports = router