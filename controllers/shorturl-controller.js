const shortUrl = require('node-url-shortener');


exports.encurtar = async (req, res) => {
    try {
        if (req.body.link == '') {
            return res.status(200).json({ msg: 'Informe a Url!' })
        } else {
            shortUrl.short(req.body.link, function (err, url) {
                const response = { shortUrl: url }
                return res.status(200).json({ response })
            });
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
