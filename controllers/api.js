'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Office = mongoose.model('Office');

module.exports = {

  /**
   * Offices api
   */

  getAllOffices: function(req, res, next) {
    Office.find({isDelete: false}, function(err, offices) {
      if (err) return res.send({status: false, error: err});

      res.send({
        status: true,
        offices: offices
      });
    })
  },
  officeCreate: function(req, res, next) {
    var newOffice = Office(req.body);

    newOffice.save(function(err) {
      if (err) return res.send({status: false, description: 'The office hasn\'t been created'});

      res.send({status: true});
    });
  },
  officeUpdate: function(req, res, next) {
    var userID = req.body.id;
    delete req.body.id;

    Office.findByIdAndUpdate(userID, req.body, function(err, office) {
      if (err) return res.send({status: false, description: 'The office hasn\'t been updated'});

      res.send({status: true});
    });
  },
  officeDelete: function(req, res, next) {
    var userID = req.body.id;
    var reasonOfDelete = req.body.reasonOfDelete;

    Office.findByIdAndUpdate(userID, {
      isDelete: true,
      reasonOfDelete: reasonOfDelete
    }, function(err, office) {
      if (err) return res.send({status: false, description: 'The office hasn\'t been deleted'});

      res.send({status: true});
    });
  }
};
