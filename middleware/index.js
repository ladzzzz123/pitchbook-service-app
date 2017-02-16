module.exports = function (app, express) {
    var config = require('../config');
    var morgan = require('morgan');
    var errorHandler = require('./errorHandler')(app, express);


    /**
     * Logger
     * */
    if (app.get('env') == 'development') {
        app.use(morgan('dev'));
    }


    /**
     * Error handing
     * */
    app.use(errorHandler);
};
