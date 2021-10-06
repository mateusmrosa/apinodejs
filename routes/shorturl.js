const express = require('express')
const router = express.Router()
const shortUrlController = require('../controllers/shorturl-controller')


router.post('/',
    shortUrlController.encurtar
)

module.exports = router