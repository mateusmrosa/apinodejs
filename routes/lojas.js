const express = require('express')
const router = express.Router()
const autenticacao = require('../middleware/autenticacao')
const lojasController = require('../controllers/lojas-controller')
const fileUploads = require('../file-uploads/uploads')


router.put(
    '/updatetaxaentrega',
    autenticacao.verifyJWT,
    lojasController.updateTaxaEntrega
)

//rota para chamar a controller que atualiza a mensagem final
router.put(
    '/updatemsgfinal',
    autenticacao.verifyJWT,
    lojasController.updateMsgFinal
)

//rota para chamar a controller que atualiza a mensagem incial
router.put(
    '/updatemsginicial',
    autenticacao.verifyJWT,
    lojasController.updateMsgInicial
)

router.put(
    '/updateUrl',
    autenticacao.verifyJWT,
    lojasController.updateUrl
)

router.put(
    '/updatemensagem',
    autenticacao.verifyJWT,
    lojasController.updateUrl
)

router.put(
    '/updatenomeloja',
    autenticacao.verifyJWT,
    lojasController.updateNomeLoja
)

router.put(
    '/updatetempoespera',
    autenticacao.verifyJWT,
    lojasController.updateTempoEspera
)

router.put('/updatedisploja',
    autenticacao.verifyJWT,
    lojasController.updateDispLoja
)


router.put('/updatetelefone',
    autenticacao.verifyJWT,
    lojasController.updateTelefone
)

router.post('/cadastroformapgto',
    autenticacao.verifyJWT,
    lojasController.cadastroFormaPgto
)


router.put('/atualizarformapgto',
    autenticacao.verifyJWT,
    lojasController.atualizarFormaPgto
)

router.delete('/deleteformapgto/:fpid',
    autenticacao.verifyJWT,
    lojasController.deleteFormaPgto
)

router.post('/cadastrologo',
    fileUploads.upload.array('lojlogo'),
    autenticacao.verifyJWT,
    lojasController.cadastroLogo
)

router.post('/obterformaspgto',
    autenticacao.verifyJWT,
    lojasController.obterFormaPagamento
)

router.put('/atualizarendereco/:usuid',
    autenticacao.verifyJWT,
    lojasController.atualizarEndereco
)

router.post('/cadastrohorariofuncionamento',
    autenticacao.verifyJWT,
    lojasController.cadastroHorariodeFuncionamento
)


router.delete('/deletehorariofuncionamento/:hfid',
    autenticacao.verifyJWT,
    lojasController.deletehorariofuncionamento
)

router.put('/atualizarhorariofuncionamento',
    autenticacao.verifyJWT,
    lojasController.atualizarhorariofuncionamento
)


router.post('/horarioFuncionamento',
    autenticacao.verifyJWT,
    lojasController.horarioFuncionamento
)

router.post('/sugestao',
    //autenticacao.verifyJWT,
    lojasController.cadastrarSugestao
)


router.post('/gerarcodigo',
    //autenticacao.verifyJWT,
    lojasController.gerarCodigo
)


//exporta o modulo router
module.exports = router




