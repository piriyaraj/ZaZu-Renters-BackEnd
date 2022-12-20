const express = require("express");
const router = express.Router();
const userControl = require("../controller/vehicleControl");

//Get the All user Info     => All users
router.get("/search/vehicle/:type/:district", userControl.handleGet);

module.exports = router;
