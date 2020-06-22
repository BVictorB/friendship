const multer = require('multer');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, 'src/static/uploads');
	},
	filename: (req, file, cb) => {
		cb(null, Date.now() + '.jpg');
	}
});
const upload = multer({
	storage: storage
});

module.exports = upload;