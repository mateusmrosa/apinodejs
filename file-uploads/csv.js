const multer = require("multer");

const csvFilter = (req, file, cb) => {
    if (file.mimetype.includes("csv")) {
        cb(null, true);
    } else {
        cb("Permitido somente arquivo csv!", false);
    }
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'csv/');
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        let data = new Date().toISOString().replace(/:/g, '-') + '-'
        cb(null, `${data}-${file.originalname}`);
    },
});

var uploadFile = multer({
    storage: storage,
    fileFilter: csvFilter
});
module.exports.uploadFile = uploadFile;