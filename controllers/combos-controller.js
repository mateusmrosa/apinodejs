const comboModels = require('../models/combos-models')


exports.obtercombospromocao = async (req, res, next) => {
    try {
        const resultSelect = await comboModels.obterComboPromocao(req.body.promoid)

        return res.status(200).json({
            combos: resultSelect.map(c => {
                return {
                    prodid: c.prodid,
                    promoid: c.promoid,
                    prodnome: c.prodnome,
                    comqtde: c.comqtde,
                }
            })
        })
    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}

