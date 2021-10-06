const http = require('http')

const app = require('./app')

const port = process.env.PORT || 3000

const server = http.createServer(app)

server.listen(port)

console.log(`api rodando na porta: ${port}`)

/*const fs = require('fs')

const https = require('https')

const app = require('./app')

const port = process.env.PORT || 3000

const options = {
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem')
};

const server = https.createServer(options, app, function (res) {
    res.writeHead(200)
})

server.listen(port, () => {

    logger.info()
    console.log(`api rodando na porta ${port}`)
})*/

