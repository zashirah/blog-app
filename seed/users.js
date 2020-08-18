const db = require("../db/connection");
const User = require("../models/users");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const users = [
    {
      firstName: "Zach",
      lastName: "Shirah",
    },
    {
      firstName: "Jeff",
      lastName: "Snyder",
    },
    {
      firstName: "Von",
      lastName: "Arzu",
    },
    {
      firstName: "Vukan",
      lastName: "Mrvaljevic",
    },
  ];

  await User.insertMany(users);
  console.log("Created users!");
};
const run = async () => {
  await main();
  db.close();
};

run();
