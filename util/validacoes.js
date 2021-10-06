
function valida(dados, nomeLoja) {

    console.log(nomeLoja.length)

    console.log(dados, nomeLoja)

    if (dados.usutelefone.length > 11 || dados.usutelefone.length < 10) {
        msg = { msg: 'Telefone do usuario inválido', retorno: false }
        console.log(msg)
    }
    else if (dados.lojtelefone.length > 11 || dados.lojtelefone.length < 10) {
        msg = { msg: 'Telefone da loja inválido', retorno: false }
        console.log(msg)
    }
    else if (dados.vennome.length < 5 || dados.vennome.length > 50) {
        msg = { msg: 'Nome do vendedor invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.vennome.length < 5 || dados.vennome.length > 50) {
        msg = { msg: 'Nome do vendedor invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.ususenha.length < 5 || dados.ususenha.length > 8) {
        msg = { msg: 'Senha menos de 5 e até 8 caracteres', retorno: false }
        console.log(msg)
    }
    else if (dados.endcep.length != 8) {
        msg = { msg: 'CEP invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.endcidade.length > 50) {
        msg = { msg: 'Nome da cidade invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.endnumero.length > 10) {
        msg = { msg: 'Numero do endereço invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.endbairro.length > 50) {
        msg = { msg: 'Bairro invalido', retorno: false }
        console.log(msg)
    }
    else if (nomeLoja.length > 20) {
        msg = { msg: 'Nome da Loja invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.endrua.length > 50) {
        msg = { msg: 'Nome da rua invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.endnome.length > 20) {
        msg = { msg: 'Nome do endereço invalido', retorno: false }
        console.log(msg)
    }
    else if (dados.endcomplemento.length > 20) {
        msg = { msg: 'Complemento do endereço inválido', retorno: false }
        console.log(msg)
    }
    else
        msg = { retorno: true }
    console.log(msg)

    return msg
}
module.exports.valida = valida


function validaUsuAtualizacao(dados) {
    console.log(dados)
    if (dados.usutelefone.length > 11 || dados.usutelefone.length < 10) {
        msg = { msg: 'Telefone do usuario inválido', retorno: false }
    }
    else if (dados.vennome.length < 5 || dados.vennome.length > 50) {
        msg = { msg: 'Nome do vendedor invalido', retorno: false }
    }
    else
        msg = { retorno: true }
    return msg
}
module.exports.validaUsuAtualizacao = validaUsuAtualizacao


function validaTelefoneLoja(lojtelefone) {
    if (lojtelefone.length > 11 || lojtelefone.length < 10) {
        msg = { msg: 'Telefone da Loja inválido', retorno: false }
    }
    else
        msg = { retorno: true }
    return msg
}
module.exports.validaTelefoneLoja = validaTelefoneLoja


function validaAcrescimo(dados) {

    if (dados.acrnome.length < 2 || dados.acrnome.length > 20) {
        msg = { msg: 'Nome do acrescimo inválido', retorno: false }
    }// 'toString().length' é usado para contar os caracteres de numeros decimais
    else if (dados.acrvalor.toString().length <= 0 || dados.acrvalor.toString().length > 7) {
        msg = { msg: 'Valor do acrescimo invalido', retorno: false }
    }
    else
        msg = { retorno: true }
    return msg
}
module.exports.validaAcrescimo = validaAcrescimo


async function validateEmail(email) {
    var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return regex.test(email)
}
module.exports.validateEmail = validateEmail


function validaCategoria(dados) {
    console.log(dados)
    if (dados.catprodnome.length < 2 || dados.catprodnome.length > 20) {
        msg = { msg: 'Nome da categoria inválido', retorno: false }
    }
    else
        msg = { retorno: true }

    return msg
}
module.exports.validaCategoria = validaCategoria


function validaProduto(dados) {
    if (dados.prodnome.length < 2 || dados.prodnome.length > 20) {
        msg = { msg: 'Nome do produto inválido', retorno: false }
    }
    else if (dados.proddescricao.length < 2 || dados.proddescricao.length > 80) {
        msg = { msg: 'Descricao invalida', retorno: false }
    }
    else if (dados.prodvalor === 0 || dados.prodvalor.toString().length > 7) {
        msg = { msg: 'Valor do produto invalido', retorno: false }
    }
    else
        msg = { retorno: true }

    return msg
}
module.exports.validaProduto = validaProduto


function validaImgProduto(imagens) {
    console.log(imagens)
    if (imagens == "") {
        msg = { msg: 'Insira uma imagem', retorno: false }
    }
    else
        msg = { retorno: true }

    return msg
}
module.exports.validaImgProduto = validaImgProduto


function validaPromocao(dados) {
    if (dados.promonome.length < 2 || dados.promonome.length > 20) {
        msg = { msg: 'Nome da promoção inválido', retorno: false }
    }
    else if (dados.promovalortotal.toString().length === 0 || dados.promovalortotal.toString().length > 7) {
        msg = { msg: 'Valor total inválido', retorno: false }
    }//parei aqui...

    else if (dados.promodescricao.length < 2 || dados.promodescricao.length > 80) {
        msg = { msg: 'Descrição da promoçao invalido', retorno: false }
    }
    else
        msg = { retorno: true }

    return msg
}
module.exports.validaPromocao = validaPromocao


async function verificaNumero(valor) {
    var regra = /^[0-9]+$/
    if (valor.match(regra)) {
        return { msg: "Numero: " + valor, retorno: true }
    } else {
        return { msg: "Permitido somente número inteiro positivo!", retorno: false }
    }
}
module.exports.verificaNumero = verificaNumero


async function verificaCPFeCNPJ(cpf, cnpj) {

    if (cnpj === '' && cpf === '') {
        msg = { msg: 'Preencha o CPF ou CNPJ', retorno: false }
        console.log(msg)
    }

    if (cpf != '') {

        if (cpf.length != 11) {
            msg = {
                msg: 'CPF invalido',
                retorno: false,
                cpf: cpf
            }
            console.log(msg)
        }
        else
            msg = { retorno: true }
        console.log(msg)
    }
    else if (cnpj != '') {

        if (cnpj.length != 14) {
            msg = {
                msg: 'CNPJ invalido',
                retorno: false,
                cnpj: cnpj
            }
            console.log(msg)
        }
        else
            msg = { retorno: true }
        console.log(msg)
    }

    return msg
}
module.exports.verificaCPFeCNPJ = verificaCPFeCNPJ


function validaSenha(senha) {
    if (senha.length < 5 || senha.length > 8) {
        msg = { msg: 'Senha é necessário menos de 5 e até 8 caracteres', retorno: false }
    } else {
        msg = { retorno: true }
    }
    return msg
}
module.exports.validaSenha = validaSenha


function validaPedidos(dados) {

    if (dados.ped_forma_pgto.length < 5 || dados.ped_forma_pgto.length > 45 || !isNaN(dados.ped_forma_pgto))
        msg = { msg: 'A forma de pagamento inválida', retorno: false }

    else if (dados.ped_nome_cliente.length < 3 || dados.ped_nome_cliente.length > 45 || !isNaN(dados.ped_nome_cliente))
        msg = { msg: 'Nome do cliente inválido', retorno: false }

    else if (dados.ped_end_logradouro.length < 3 || dados.ped_end_logradouro.length > 255 || !isNaN(dados.ped_end_logradouro))
        msg = { msg: 'Logradouro inválido', retorno: false }

    else if (dados.ped_telefone.length != 11 || isNaN(dados.ped_telefone))
        msg = { msg: 'Telefone inválido', retorno: false }

    else if (dados.ped_end_num.toString().length > 10 || isNaN(dados.ped_end_num))
        msg = { msg: 'Número do prédio inválido', retorno: false }

    else if (dados.ped_end_bairro.length < 5 || dados.ped_end_bairro > 80 || !isNaN(dados.ped_end_bairro))
        msg = { msg: 'Bairro inválido', retorno: false }

    else if (dados.ped_end_cidade.length < 3 || dados.ped_end_cidade.length > 100 || !isNaN(dados.ped_end_cidade))
        msg = { msg: 'Cidade inválida', retorno: false }

    else if (dados.itens[0].ite_qtde.toString().length > 11 || isNaN(dados.itens[0].ite_qtde))
        msg = { msg: 'Qtde do item inválido', retorno: false }
        
    else if (dados.itens[0].ite_valor_total.toString().length > 11 || isNaN(dados.itens[0].ite_valor_total))
        msg = { msg: 'Valor inválido', retorno: false }
    else
        msg = { retorno: true }
    return msg
}
module.exports.validaPedidos = validaPedidos
