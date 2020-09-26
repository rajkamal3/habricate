const fs = require('fs');

const users = JSON.parse(fs.readFileSync(`${__dirname}/../devData/users.json`));

exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        tours: {
            users
        }
    });
};
