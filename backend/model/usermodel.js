const { model } = require("mongoose");
const { userschema } = require("../schemas/userschema");

const usermodel = model("user", userschema);

module.exports = { usermodel };