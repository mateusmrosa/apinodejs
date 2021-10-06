const pedidoModels = require('../models/pedidos-models')


exports.download = async (req, res, next) => {
    try {
        const resultPdf = await pedidoModels.obterPdf();

        if (resultPdf.length > 0) {

            updateFlagPedImpresso = await pedidoModels.updateFlagPedImpresso()

            if (updateFlagPedImpresso.affectedRows > 0) {
                console.log("Flag atualizada")
            }

            return res.status(200).json({
                pdf: resultPdf.map(p => {
                    return {
                        ped_caminho_pdf: `${process.env.URLFOODTOK}/${p.ped_caminho_pdf}`
                    }
                })
            })

        } else {
            return res.status(404).json({
                mensagem: "Não existe pedido para ser impresso!"
            })
        }
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
