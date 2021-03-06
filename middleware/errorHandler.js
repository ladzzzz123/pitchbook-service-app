var config = require('../config');
var errorhandler = require('errorhandler')


var sendHttpError = function (error, res) {
    res.status(error.status);

    if (res.req.xhr) {
        res.json(error);
    } else {
        res.render('error', {
            error: {
                status: error.status,
                message: error.message,
                stack: config.get('debug') ? error.stack : ''
            },
            project: config.get('project')
        });
    }
};

module.exports = function (app, express) {
    var log = require('../libs/log')(module);
    var HttpError = require('../error').HttpError;

    return function(err, req, res, next) {
        if (typeof err === 'number') {
            err = new HttpError(err);
        }
        if (err instanceof HttpError) {
            sendHttpError(err, res);
        } else {
            if (app.get('env') === 'development') {
                errorhandler()(err, req, res, next);
            } else {
                log.error(err);
                err = new HttpError(500);
                sendHttpError(err, res);
            }
        }
    };
};