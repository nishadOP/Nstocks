const { model } = require("mongoose");
const { orderschema } = require("../schemas/ordershema");

const ordermodel = model("orders", orderschema);

module.exports = { ordermodel };