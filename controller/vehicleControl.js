let jwt = require("jsonwebtoken");
var config = require("../config/dbconfig");
const vehicle = require("../models/vehicleModel");

var functions = {
  //Get the all users
  handleGet: async function (req, res, next) {
    try {
      let allVehicle = await vehicle.find().select("-password");
      console.log(allVehicle);
      return res.status(200).json({ allVehicle: allVehicle });
    } catch (err) {
      if (err) {
        return next(err);
      }
    }
  },
};

module.exports = functions;
