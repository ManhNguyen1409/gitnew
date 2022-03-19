const router = require("express").Router();

const path = require("path");

router.get("/home", (req, res) => {
  console.log(req.query);
  console.log(req.params);

  res.sendFile(path.join(__dirname, "../view/home.html"));
});

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../view/todo.html"));
});

router.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "../view/singin.html"));
});

router.post("/login", function (req, res) {
  res.json(path.join(__dirname, "../view/singin.html"));
});
router.get("/test", function (req, res) {
  res.render("../view/test.ejs");
});

module.exports = router;
