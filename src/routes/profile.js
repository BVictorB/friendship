const User = require('../user');

const profile = (req, res) => {
    User.findOne({
		_id: req.session.sessionID
	}, (err, user) => {
		if (err) {
			console.log('MongoDB Error:' + err);
		}
		if (user) {
			res.render('profile.ejs', {
				'user': user
			});
		} else {
			console.log('Error: client ID could not been found!');
		}
	});
};

module.exports = profile;