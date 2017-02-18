'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');

module.exports = function (app) {
    /**
     * Public directory
     * */
    app.use(express.static(__dirname + '/public'));

    /**
     * Favicon
     * */
    app.use(favicon(__dirname + '/public/favicon.png'));

    /**
     * Sessions
     * */
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
};
