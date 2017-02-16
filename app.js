'use strict';

var express = require('express');
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
};
