const {model} = require("mongoose");

const {positionschema} = require('../schemas/positionschema');

const positionsmodel=  model ("position",positionschema);

module.exports = {positionsmodel}