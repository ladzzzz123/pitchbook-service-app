'use strict';

var join = require('path').join;
var config = require('../config');
var api = require('../controllers/api');
var HttpError = require('../error').HttpError;

module.exports = function (app) {
    /**
     * Pages
     */

    //index
    app.get('/', function(req, res) {
        res.sendFile(join(__dirname + '/../public/index.html'));
    });

    /**
     * API
     */
    // app.post('/api/sign-in', api.signIn);
    // app.post('/api/sign-up', api.signUp);
    // app.post('/api/forgot-password', api.forgotPassword);
    // app.post('/api/reset-password/:token', api.resetPassword);


    /**
     * Default
     */
    app.get('*', function (req, res, next) {
        res.status(404);

        // default to plain-text
        res.type('txt').send('Not found');
    });
};
