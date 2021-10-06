const express = require('express')
const router = express.Router()
const upload = require('../file-uploads/csv')
const uploadCsvController = require('../controllers/uploadcsv-controller')



router.post('/',
    upload.uploadFile.single('file'),
    uploadCsvController.upload
)

module.exports = router