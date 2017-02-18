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
      if (err) return res.send({result: 'failed', description: 'Something has gone wrong'});

      res.send({
        result: 'success',
        data: offices
      });
    })
  },
  officeCreate: function(req, res, next) {
    var newOffice = Office(req.body);

    newOffice.save(function(err) {
      console.log(err);
      if (err) return res.send({result: 'failed', description: 'The office hasn\'t been created'});

      res.send({result: 'success'});
    });
  },
  officeUpdate: function(req, res, next) {
    var userID = req.body.id;
    delete req.body.id;

    Office.findByIdAndUpdate(userID, req.body, function(err, office) {
      if (err) return res.send({result: 'failed', description: 'The office hasn\'t been updated'});

      res.send({
        result: 'success',
        data: office
      });
    });
  },
  officeDelete: function(req, res, next) {
    var userID = req.body.id;
    var reasonOfDelete = req.body.reasonOfDelete;

    Office.findByIdAndUpdate(userID, {
      isDelete: true,
      reasonOfDelete: reasonOfDelete
    }, function(err, office) {
      if (err) return res.send({result: 'failed', description: 'The office hasn\'t been deleted'});

      res.send({
        result: 'success',
        data: office
      });
    });
  }
};
