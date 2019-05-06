var express = require('express');
var router = express.Router();
const sanitizer = require('sanitizer');
const { exec } = require('child_process');
const fs = require('fs');


router.get('/', function (req, res, next) {
    res.json({
        status: "success",
        message: 'Proxy reset.',
    })
    exec('pkill java', (error, stdout, stderr) => {
    });
});
module.exports = router;