const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  payer: String,
  receiver: String,
  amount: Number,
  date: String,
});

module.exports = mongoose.model("Transactions", transactionSchema);
