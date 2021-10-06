const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const imagensController = require('../controllers/imagens-controller')
const fileUploads = require('../file-uploads/uploads')


router.post('/obterimgporproduto',
    autenticacao.verifyJWT,
    imagensController.obterImgPorProduto
)

router.post('/obterimgporpromocao',
    //autenticacao.verifyJWT,
    imagensController.obterImgPromocao
)


router.put('/atualizar',
    autenticacao.verifyJWT,
    fileUploads.upload.array('imgprocaminho'),
    imagensController.atualizar
)

router.post('/cadastroimgpromocao',
    autenticacao.verifyJWT,
    fileUploads.upload.array('imgpromocaminho'),
    imagensController.cadastroImgPromocaoId
)

router.put('/updateimgpromocao',
    fileUploads.upload.array('imgpromocaminho'),
    autenticacao.verifyJWT,
    imagensController.updateImgPromocao
)

router.put('/updateimgproduto',
    fileUploads.upload.array('imgprocaminho'),
    autenticacao.verifyJWT,
    imagensController.updateImgProduto
)



module.exports = router