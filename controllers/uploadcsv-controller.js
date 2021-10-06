const fs = require("fs");
const csv = require("fast-csv");

exports.upload = async (req, res) => {
    try {

        const arquivo = req.file
        console.log(arquivo.path)

        if (arquivo == undefined) {
            return res.status(400).json({ msg: "Enviei seu arquivo csv!" });
        }

        var csvDados = [];

        fs.createReadStream(`${arquivo.path}`)
            .pipe(
                csv.parse({
                    delimiter: ';'
                })
            )
            .on('data', function (dataRow) {
                csvDados.push(dataRow)
            })
            .on('end', function () {

                console.log(csvDados)

                var json = {};

                for (var i in csvDados) {
                    json['pos: ' + i] = csvDados[i];
                }
                return res.status(200).json({ response: json })
            })

    } catch (e) {
        console.log(e)
        return res.status(400).json({ mensagem: "Algo deu errado!", Erro: e })
    }
}
