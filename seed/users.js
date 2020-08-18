const db = require("../db/connection");
const Post = require("../models/posts");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const posts = [
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

  await Post.insertMany(posts);
  console.log("Created posts!");
};
const run = async () => {
  await main();
  db.close();
};

run();
