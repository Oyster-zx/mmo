var express = require('express');
var router = express.Router();
var Pusher = require('pusher');
var users = require('../users');

var pusher = new Pusher({
    appId: '666247',
    key: 'fe302f7d2d8ed454824b',
    secret: '7510e5b0b3fa62806a52',
    cluster: 'eu',
    encrypted: true
});

/* GET home page. */
router.post('/auth', function(req, res, next) {
    console.log(JSON.stringify(req.body));
    var socketId = req.body.socket_id;
    var channel = req.body.channel_name;
    var user = users.getUser(socketId);
    var presenceData = {
        user_id: socketId,
        user_info: {
            name: user.name,
            race: user.race,
            class: user.class
        }
    };

    var auth = pusher.authenticate(socketId, channel, presenceData);
    res.send(auth);
});

module.exports = router;