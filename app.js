const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParse = require('body-parser');
const cors = require('cors');
const path = require('path');

const rotaUsuarios = require('./routes/usuarios')
const rotaProdutos = require('./routes/produtos')
const rotaCategoriasProdutos = require('./routes/categoriasprodutos')
const rotaDesign = require('./routes/design')
const rotaPromocoes = require('./routes/promocoes')
const rotaAcrescimo = require('./routes/acrescimo')
const rotaImagens = require('./routes/imagens')
const rotaCombos = require('./routes/combos')
const rotaCd = require('./routes/cd')
const rotaLojas = require('./routes/lojas')
const rotaPainel = require('./routes/painel')
const rotaShortUrl = require('./routes/shorturl')
const rotaAdm = require('./routes/adm')
const rotaPedidos = require('./routes/pedidos')
const rotaUploadCsv = require('./routes/upload-csv')
const rotaDownload = require('./routes/download')
const rotaExecutavel = require('./routes/executavel')
const rotaReimpressaoped = require('./routes/reimpressaoped')


app.use(cors());
app.use(morgan('dev'));
//diretorio para renderizar e guardar as imagens
app.use('/uploads', express.static('uploads'));

//diretorio para renderizar e guardar os pdf's
app.use('/pdf', express.static('pdf'));

//diretorio para renderizar e guardar os exe
app.use('/executaveis', express.static('executaveis'));


//apenas dados simples
app.use(bodyParse.urlencoded({ extended: false })); 
app.use(bodyParse.json()); 

//entrada de json no body
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.use((req, res, next) => {
    req.header('Access-Control-Allow-Origin', '*');
    req.header(
        'Access-Control-Allow-Header',
        'Origin, X-Requested-Width, Content-Type, Accept, Authorization',
    );

    if (req.method === 'OPTIONS') {
        req.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).send({});
    }
    next();
});

//diretorio para renderizar e guardar as imagens
app.use(
    '/files',
    express.static(__dirname + '/uploads')
)
//diretorio para renderizar e guardar os pdf's
app.use(
    '/files',
    express.static(__dirname + '/pdf')
)

app.use('/usuarios', rotaUsuarios)
app.use('/produtos', rotaProdutos)
app.use('/categoriasprodutos', rotaCategoriasProdutos)
app.use('/design', rotaDesign)
app.use('/promocoes', rotaPromocoes)
app.use('/acrescimo', rotaAcrescimo)
app.use('/imagens', rotaImagens)
app.use('/combos', rotaCombos)
app.use('/cd', rotaCd)
app.use('/lojas', rotaLojas)
app.use('/painel', rotaPainel)
app.use('/shorturl', rotaShortUrl)
app.use('/adm', rotaAdm)
app.use('/pedidos', rotaPedidos)
app.use('/uploadcsv', rotaUploadCsv)
app.use('/download', rotaDownload)
app.use('/executavel', rotaExecutavel)
app.use('/reimpressaoped', rotaReimpressaoped)

//quando não encontrar nenhuma rota vai entra aqui
app.use((req, res, next) => {
    const erro = new Error('Erro 404, rota não encontrada!');
    erro.status = 404;
    next(erro);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: { mensagem: error.message }
    });
});

module.exports = app;