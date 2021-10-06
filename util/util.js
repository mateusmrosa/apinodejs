var crypto = require("crypto");

function formataString(valor) {

    return valor.normalize("NFD")
        .replace(/[^a-zA-Zs]/g, "")
        .toLowerCase();
}
module.exports.formataString = formataString

//gerar uma hash para ser o codigo da loja (que é necessario para impressao dos pedidos do desktop)
function getRandom(usuid) {
    var hash = crypto.randomBytes(10).toString('hex');
    return hash + usuid
}
module.exports.getRandom = getRandom


function remover_acentos_espaco(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
module.exports.remover_acentos_espaco = remover_acentos_espaco
