const { accounts } = require('../database/models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

//admin/mod
const route = async (req, res) => {
	const updated = await accounts.update({
		mod: true
	}, {
		where: {
			username: {
				[Op.eq]: req.body.username || ''
			}
		}
	});

	if (!updated[0]) {
		return res.status(500).send('Failed to set mod status');
	}

	res.status(200).end();
};

module.exports = route;