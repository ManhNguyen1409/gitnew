const todoRouter = require("express").Router();

const req = require("express/lib/request");
const res = require("express/lib/response");
const path = require("path");
const userModel = require("./usermodel")

const todoModel = require("./todoModel");

todoRouter.get("/", function (req, res) {
  todoModel
    .find()
    .then(function (data) {
      res.json(data);
    })
    .catch(function (err) {
      res.json({ mess: "that bai" });
    });
});

todoRouter.post("/", function (req, res) {
  console.log(req.body);
  todoModel
    .create({
      status: req.body.status,
      name: req.body.name,
      deadline: new Date(req.body.deadline),
    })
    .then(function (data) {
      res.json({ mess: "Thanh cong" });
    })
    .catch(function (err) {
      res.json({ mess: "that bai" });
    });
});

todoRouter.get('/list', function (req, res) {
  todoModel.find()
  .skip((req.query.page-1)*req.query.limit)
  .limit(req.query.limit)
  .then(function (data) {
    res.json(data);
  })
  .catch(function (err) {
    res.json({ err ,mess: "that bai" });
  });
})


todoRouter.put("/", function (req, res) {
  todoModel
    .updateOne(
      {
        _id: req.body.id,
      },
      {
        _id: req.body.id,
        status: req.body.newstatus,
        name: req.body.newname,
        deadline: req.body.newdeadline
      }
    )
    .then(function (data) {
      res.json({ mess: "Thanh cong" });
    })
    .catch(function (err) {
      res.json({ mess: "that bai" });
    });
});
todoRouter.delete('/', function (req, res) {
    todoModel.deleteOne({ 
        _id: req.body.id,
    })
    .then(function (data) {
        res.json({ mess: "Thanh cong" });
      })
      .catch(function (err) {
        res.json({ mess: "that bai" });
      });
})
todoRouter.post('/login', function (req, res) {
  todoModel.findOne({ 

  })
})


module.exports = todoRouter;
