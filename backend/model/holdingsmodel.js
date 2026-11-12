const {model} = require("mongoose");

const {holdingschema} = require('../schemas/holdingschema');

const holdingsmodel =  model ("holding",holdingschema);

module.exports = {holdingsmodel}