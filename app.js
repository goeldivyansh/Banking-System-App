require("dotenv").config();
const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  seedDB = require("./seedDB"),
  moment = require("moment"),
  User = require("./models/users"),
  Transaction = require("./models/transaction");

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGO_ATLAS || "mongodb://localhost/Banking_System", { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false });

app.get("/", function (req, res) {
  mongoose.connection.db.collection("users").countDocuments(function (err, count) {
    if (count == 0) {
      seedDB();
      res.redirect("/");
    } else {
      User.find({}, function (err, users) {
        if (err) {
          console.log(err);
        } else {
          res.render("home", { users: users });
        }
      });
    }
  });
});

app.get("/user/:id", function (req, res) {
  const id = req.params.id;
  User.findById(id, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      res.render("user", { user: foundUser });
    }
  });
});

app.get("/transfer/:id", function (req, res) {
  const id = req.params.id;
  User.find({ _id: { $ne: id } }, function (err, users) {
    if (err) {
      console.log(err);
    } else {
      res.render("transfer", { users: users, id: id });
    }
  });
});

app.get("/transactions/:id", function (req, res) {
  const id = req.params.id;
  User.findById(id)
    .populate("transaction")
    .exec(function (err, user) {
      if (err) {
        console.log(err);
      } else {
        if (user.transaction.length == 0) {
          res.render("no_transactions", { name: user.name });
        } else {
          res.render("transactions", { transactions: user.transaction, name: user.name });
        }
      }
    });
});

app.post("/transfer/:id", function (req, res) {
  User.findById(req.params.id, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      User.findOne({ name: req.body.payee }, function (err, payee) {
        if (err) {
          console.log(err);
        } else {
          if (foundUser.current_balance >= Number(req.body.amount)) {
            foundUser.current_balance -= Number(req.body.amount);
            payee.current_balance += Number(req.body.amount);
            foundUser.save();
            payee.save();
            const date = new Date();
            const new_date = moment(date).format("DD/MM/YYYY");
            const transact = new Transaction({
              payer: foundUser.name,
              receiver: payee.name,
              amount: Number(req.body.amount),
              date: new_date,
            });
            Transaction.create(transact, function (err, transact) {
              if (err) {
                console.log(err);
              } else {
                foundUser.transaction.push(transact);
                payee.transaction.push(transact);
                foundUser.save();
                payee.save();
              }
            });
            res.render("success");
          } else {
            res.render("failure");
          }
        }
      });
    }
  });
});

app.get("*", function (req, res) {
  res.send("No Page Found!");
});

app.listen(process.env.PORT || 3000, process.env.IP, function () {
  console.log("Server Has Started!");
});
