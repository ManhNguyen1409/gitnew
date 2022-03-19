const express = require("express");

const app = express();

const path = require("path");

// const userRouter = require("./userRouter");

// const monggo = require("../lambaitap/monggo");

const indexRouter = require("./todo/indexRouter");
const router = require("./todo/todoRouter");

app.use("/view", express.static(path.join(__dirname, "./view")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/todo", router);
// app.use("/user", userRouter);
app.use("/index", indexRouter);
app.set("view engine", "ejs");

// app.post('/create', function(req, res){
//     console.log(req.body);
//     monggo.create({
//         name: req.body.username,
//         password: req.body.password,
//     })
//     .then(function(data){
//         res.send(data);
//     }).catch(function(err){
//         res.send(err)
//     })
// })

app.put("/doimk", function (req, res) {
  console.log(req.body);
  monggo
    .updateOne(
      {
        name: req.body.username,
        password: req.body.password,
      },
      {
        password: req.body.newpass,
      }
    )
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json(err);
    });
});

app.get("/userr", (req, res) => {
  monggo
    .find()
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      res.send(err);
    });
});
app.get("/todolist", (req, res) => {
  console.log(req.query);
  console.log(req.params);

  res.sendFile(path.join(__dirname, "./view/page.html"));
});

app.get("/home", (req, res) => {
  console.log(req.query);
  console.log(req.params);

  res.sendFile(path.join(__dirname, "./view/home.html"));
});

app.listen(process.env.PORT || 4000);
