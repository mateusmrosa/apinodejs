


exports.downloadMobile = async (req, res, next) => {
    try {

        const response = { linkDownload: `http://foodtok.com.br:3000/executaveis/mobile.apk` }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}


exports.downloadDesktop = async (req, res, next) => {
    try {

        const response = { linkDownload: `http://foodtok.com.br:3000/executaveis/desktop.zip` }
        return res.status(200).json({ response })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
