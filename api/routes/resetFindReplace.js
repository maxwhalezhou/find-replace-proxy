var express = require('express');
var router = express.Router();
const sanitizer = require('sanitizer');
const { exec } = require('child_process');
const fs = require('fs');


router.get('/', function (req, res, next) {
    exec('pkill java"', (error, stdout, stderr) => {
        if (error) {
            res.json({
                status: "fail",
                message: 'Proxy could not be reset',
            })
        }
        res.json({
            status: "success",
            message: 'Proxy reset.',
        })
    });
});
module.exports = router;