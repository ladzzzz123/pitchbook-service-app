'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfficeSchema = new Schema({
    address_1: {
      type: String,
      required: true,
      default: ''
    },
    address_2: {
      type: String,
      default: ''
    },
    city: {
        type: String,
        required: true,
        default: ''
    },
    state: {
        type: String,
        required: true,
        default: ''
    },
    postal_code: {
        type: String,
        required: true,
        default: ''
    },
    country: {
        type: String,
        required: true,
        default: ''
    },
    phone: {
        type: String,
        default: ''
    },
    fax: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    primary_hq: {
        type: Boolean,
        default: false
    },
    isDelete: {
      type: Boolean,
      default: false
    },
    reasonOfDelete: {
      type: String,
      default: ''
    }
},
{
  timestamps: true
});

OfficeSchema.statics = {

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

mongoose.model('Office', OfficeSchema);
