const jwt = require('jsonwebtoken')

exports.verifyJWT = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['token']
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, function (err, decoded) {
            if (err) {
                return res.status(400).json({ retorno: false, msg: 'Falha ao tentar autenticar o token!' })
            } else {
                //se tudo correr bem, salver a requisição para o uso em outras rotas
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(401).send({
            retorno: false,
            msg: 'Não autorizado!'
        })
    }
}

exports.verifyJwtAdm = (req, res, next) => {
    var token = req.body.token || req.query.token || req.headers['token']
    if (token) {
        console.log(token)
        jwt.verify(token, process.env.JWT_KEY_MASTER, function (err, decoded) {
            if (err) {
                return res.status(400).json({ retorno: false, msg: 'Falha ao tentar autenticar o token!' })
            } else {
                //se tudo correr bem, salver a requisição para o uso em outras rotas
                req.decoded = decoded
                next()
            }
        })
    } else {
        return res.status(401).send({
            retorno: false,
            msg: 'Não autorizado!'
        })
    }
}
