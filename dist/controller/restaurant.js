'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _weather = require('../model/weather');

var _weather2 = _interopRequireDefault(_weather);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var config = _ref.config,
      db = _ref.db;

  var api = (0, _express.Router)();

  // 'v1/weather/add' - Create
  api.post('/add', function (req, res) {
    var newRest = new _weather2.default();
    newRest.name = req.body.name;

    newRest.save(function (err) {
      if (err) {
        res.send(err);
      }
      res.json({ "message": "Weather saved successfully" });
    });
  });

  // 'v1/weather/' - Read
  api.get('/', function (req, res) {
    _weather2.default.find({}, function (err, weathers) {
      if (err) {
        res.send(err);
      }
      res.json(weathers);
    });
  });
  return api;
};
//# sourceMappingURL=weather.js.map