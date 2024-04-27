const config = require("./config");
<<<<<<< HEAD
const  makeRatingFile  = require("./rating-file");
const calculations  = require("./calculations");

module.exports = { config, makeRatingFile, calculations };
=======
const makeRatingFile = require("./rating-file");
const { createRating, updateRating } = require("./calculations");

module.exports = { config, makeRatingFile, createRating, updateRating };
>>>>>>> fddce225dd00d32de356d84e21b1654a25562258
