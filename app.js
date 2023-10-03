const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const app = express();

//MongoDB
const db = require("./server").db();

//use Midllewares
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

//Sessions

//views

app.set("views", "views");
app.set("view engine", "ejs");

//Routes
app.get("/", (req, res) => {
  res.render("logUp");
});

app.get("/students", (req, res) => {
  db.collection("academy-students")
    .find()
    .toArray((err, data) => {
      if (err) {
        res.end("Something went wrong");
      } else {
        res.render("students", { students: data });
      }
    });
});

app.post("/academy-students", (req, res) => {
  const f_name = req.body.f_name;
  const s_name = req.body.s_name;
  const birth = req.body.birth;
  const email = req.body.email;
  db.collection("academy-students").insertOne(
    { first_Name: f_name, second_name: s_name, birth: birth, email: email },
    (err, data) => {
      if (err) {
        res.end("Something went wrong");
      } else {
        res.json({ state: "Successfully" });
      }
    }
  );
});

module.exports = app;
