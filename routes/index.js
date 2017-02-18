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
    app.get('/api/offices', api.getAllOffices);
    app.post('/api/office/create', api.officeCreate);
    app.post('/api/office/update', api.officeUpdate);
    app.post('/api/office/delete', api.officeDelete);

    /**
     * Default
     */
    app.get('*', function (req, res, next) {
        res.status(404);

        // default to plain-text
        res.type('txt').send('Not found');
    });
};
