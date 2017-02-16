'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var log = require('../libs/log')(module);


module.exports = {


    /**
     * Reset password
     */

    page404: function (req, res) {
        return res.json({result: 'failed', description: 'Page not found'})
    }
};
