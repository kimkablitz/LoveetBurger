var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var info = {
      brgr: data
    };
    console.log(info);
    res.render("index", info);
  });
});

router.post("/api/burgers/", function(req, res) {
  burger.create([
    "burger_name"
  ],
    req.body.burger_name
  , function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
// create: function(col,val, cb) {
//   orm.create("burgers", col, val, function(res) {
//     cb(res);
//   });
// },

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);
  burger.update({"devoured":"true"}, condition,function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/burgers/", function(req, res) {
  burger.delete([req.body.burger_name], [req.body.id], function() {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
