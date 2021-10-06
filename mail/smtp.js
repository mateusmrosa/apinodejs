const nodemailer = require('nodemailer')
const template = require('./email.template')


function enviarEmailAtivacao(dados, token) {
	var transporter = nodemailer.createTransport({
		host: 'email-ssl.com.br',
		port: 465,
		auth: {
			user: 'contato@foodtok.com.br',
			pass: 'F@contato1'
		}
	})

	var mailOptions = {
		from: 'contato@foodtok.com.br',
		to: `${dados.usuemail}`,
		subject: `Link de ativação da conta: ${dados.usuemail} `,
		html: template.enviarArqEmailAtivaConta(dados, token)
	}

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log('Email enviado: ' + info.response)
		}
	})
}
module.exports.enviarEmailAtivacao = enviarEmailAtivacao


function enviarEmailResetSenha(dados, token) {

	var transporter = nodemailer.createTransport({
		host: 'email-ssl.com.br',
		port: 465,
		auth: {
			user: 'contato@foodtok.com.br',
			pass: 'F@contato1'
		}
	})

	console.log(dados)

	var mailOptions = {
		from: 'contato@foodtok.com.br',
		to: `${dados.email}`,
		subject: `Link para redefinição de senha`,
		html: template.enviarArqEmailResetSenha(dados, token)
	}

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			return console.log(error)
		} else {
			return console.log('Email enviado: ' + info.response)
		}
	})

	console.log(mailOptions.to)
}
module.exports.enviarEmailResetSenha = enviarEmailResetSenha


function enviarEmailSugestao(data, msgs) {

	console.log(msgs)

	var transporter = nodemailer.createTransport({
		host: 'email-ssl.com.br',
		port: 465,
		auth: {
			user: 'contato@foodtok.com.br',
			pass: 'F@contato1'
		}
	})

	var mailOptions = {
		from: 'contato@foodtok.com.br',
		to: `${data[0].usuemail} `,
		subject: `Olá ${data[0].vennome} recebemos sua sugestão!`,
		html: template.enviarArqEmailSugestao(data, msgs)
	}

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			return console.log(error)
		} else {
			return console.log('Email enviado: ' + info.response)
		}
	})

	console.log(mailOptions.to)
}
module.exports.enviarEmailSugestao = enviarEmailSugestao