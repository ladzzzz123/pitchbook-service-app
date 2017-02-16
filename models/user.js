'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var log = require('../libs/log')(module);

var UserSchema = new Schema({
    status: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        unique: true
    },
    first_name: {
        type: String,
        default: ''
    },
    last_name: {
        type: String,
        default: ''
    },
    avatar: {
        type: String,
        default: ''
    },
    hashedPassword: {
        type: String,
        default: ''
    },
    //ToDo: See 'provider' problem in passport. Does not rigth value in DB
    provider: {
        type: Array
    },
    salt: {
        type: String,
        default: ''
    },
    token: {
        type: Object
    },
    google: {},
    twitter: {},
    facebook: {}
});


UserSchema.virtual('password')
    .set(function (password) {
        this._plainPassword = password;
        this.salt = this.makeSalt();
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(function () {
        return this._plainPassword;
    });


// UserSchema.methods = {
//     /**
//      * Make salt
//      *
//      * @return {String}
//      * @api public
//      */
//     makeSalt: function () {
//         return Math.round((new Date().valueOf() * Math.random())) + '';
//     },
//
//     /**
//      * Encrypt password
//      *
//      * @param {String} password
//      * @return {String}
//      * @api public
//      */
//     encryptPassword: function (password) {
//         if (!password) return '';
//         try {
//             return crypto
//                 .createHmac('sha1', this.salt)
//                 .update(password)
//                 .digest('hex');
//         } catch (err) {
//             return '';
//         }
//     },
//
//     /**
//      * Check password
//      *
//      * @param {String} password
//      * @return {String}
//      * @api public
//      */
//     checkPassword: function (password) {
//         return this.encryptPassword(password) === this.hashedPassword;
//     }
// };

UserSchema.statics = {

    findByEmail: function (email, cb) {
        return this.findOne({'email': email}).exec(cb);
    },

    findByToken: function (token, datenow, cb) {
        return this.findOne({
            'token.id': token,
            'token.expires': {$gt: datenow}
        })
            .exec(cb);
    },

    load: function (options, cb) {
        options.select = options.select || 'first_name last_name avatar';
        this.findOne(options.criteria)
            .select(options.select)
            .exec(cb);
    }

};

mongoose.model('User', UserSchema);
