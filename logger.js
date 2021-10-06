const winston = require('winston')

module.exports.logger = winston.createLogger({
    transports: [
        new winston.transports.File({
            level: 'info',
            filename: `${__dirname}/./logs/log-info-api.log`,
            json: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        }),

        new winston.transports.File({
            level: 'error',
            filename: `${__dirname}/./logs/log-error-api.log`,
            json: true,
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.json()
            )
        })
    ]
})