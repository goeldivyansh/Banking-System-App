const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  email: String,
  current_balance: Number,
  address: String,
  gender: String,
  customer_type: String,
  father_name: String,
  dob: String,
  martial_status: String,
  transaction: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transactions",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
