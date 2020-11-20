const User = require("./models/users");

const data = [
  {
    name: "Don Messwidme",
    email: "Don_Messwidme@gmail.com",
    current_balance: 100000,
    address: "1563, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Theresa Green",
    dob: "1/1/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Anna Domino",
    email: "Anna_Domino@gmail.com",
    current_balance: 100000,
    address: "1657, Dlf City, Gurgaon, Gurgaon",
    gender: "Female",
    customer_type: "Public",
    father_name: "Stan Dupp",
    dob: "2/2/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Kieran Pollard",
    email: "Kieran_Pollard@gmail.com",
    current_balance: 100000,
    address: "1658, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Clyde Stale",
    dob: "3/3/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Baristo",
    email: "Baristo@gmail.com",
    current_balance: 100000,
    address: "1456, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Samson",
    dob: "4/4/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Polly Pipe",
    email: "Polly_Pipe@gmail.com",
    current_balance: 100000,
    address: "1446, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Con Staninterupshuns",
    dob: "5/5/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Annie Versaree",
    email: "Annie_Versaree@gmail.com",
    current_balance: 100000,
    address: "1654, Dlf City, Gurgaon, Gurgaon",
    gender: "Female",
    customer_type: "Public",
    father_name: "Mal Nurrisht",
    dob: "6/6/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Claude Strophobia",
    email: "Claude_Strophobia@gmail.com",
    current_balance: 100000,
    address: "1116, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Wayde N. Thabalanz",
    dob: "7/7/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Dulcie Veeta",
    email: "Dulcie_Veeta@gmail.com",
    current_balance: 100000,
    address: "1896, Dlf City, Gurgaon, Gurgaon",
    gender: "Female",
    customer_type: "Public",
    father_name: "Lee Nonmi",
    dob: "8/8/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Abby Normal",
    email: "Abby_Normal@gmail.com",
    current_balance: 100000,
    address: "1657, Dlf City, Gurgaon, Gurgaon",
    gender: "Female",
    customer_type: "Public",
    father_name: "Simon Sais",
    dob: "9/9/2000",
    martial_status: "Unmarried",
  },
  {
    name: "Norma Stitts",
    email: "Norma_Stitts@gmail.com",
    current_balance: 100000,
    address: "1659, Dlf City, Gurgaon, Gurgaon",
    gender: "Male",
    customer_type: "Public",
    father_name: "Cherry Blossom",
    dob: "10/10/2000",
    martial_status: "Unmarried",
  },
];

function seedDB() {
  data.forEach(function (seed) {
    User.create(seed, function (err) {
      if (err) {
        console.log(err);
      }
    });
  });
}

module.exports = seedDB;
