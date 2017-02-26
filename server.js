'use strict';

var config = require('./config');
var join = require('path').join;
var fs = require('fs');
var mongoose = require('mongoose');
var express = require('express');
var app = express();

mongoose.connect(config.get('db:connection') + config.get('db:name'), config.get('db:options'), function (err) {
    if(err) throw err;

    /**
     * Models
     * */
    fs.readdirSync(join(__dirname, 'models')).forEach(function (file) {
        if (~file.indexOf('.js')) require(join(__dirname, 'models', file));
    });

    // require('./libs/passport')(passport);

    /**
     * Application settings
     * */
    require('./app')(app);

    /**
     * Middlewares
     * */
    // require('./middleware')(app, express);

    /**
     * Routes
     * */
    require('./routes')(app);


    /**
     * Start server
     * */
    app.listen(process.env.PORT, function () {
        console.log('Server started on port ' + process.env.PORT);
    });


});

module.exports = app;
