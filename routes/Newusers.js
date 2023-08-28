var express=require('express');
var router=express.Router();
var users=require('../models/new user')
router.post('/users', async function(req,res){
    var data = new users(req.body)
    await data.save()
    res.json({
        status:"success  "
    })
})
// user login



router.post("/login", async function (req, res) {
    try {
      let data = await users.findOne({ email: req.body.email });
      if (data?.password === req.body.password) {
        res.json({
          status: "success",
          data: data,
        });
      } else {
        res.json({
          status: "error",
          message: "user not found",
        });
      }
    } catch (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
  });


  //get-------------->
  router.get("/userget", async function (req, res) {
    try {
      let data = await users.find();
      res.json({
        status: "success",
        data: data,
      });
    } catch (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
  });
// get by Id------------>

router.get("/:getid", async function (req, res) {
  try {
    let data = await users.findById(req.params.getid, req.body);
    res.json({
      status: "success",
      data: data,
    });
  } catch (err) {
    res.json({
      status: "error",
      message: err,
    });
  }
});
  // update------------->
  router.put("/:update", async function (req, res) {
    try {
      await users.findByIdAndUpdate(req.params.update, req.body);
      res.json({
        status: "this user updated successfully",
      });
    } catch (err) {
      res.json({
        status: "error",
        meassage: err,
      });
    }
  });
  //delete------------->

  router.delete("/:delete", async function (req, res) {
    try {
      await users.findByIdAndDelete(req.params.delete, req.body);
      res.json({
        status: "success",
      });
    } catch (err) {
      res.json({
        status: "error",
        meassage: err,
      });
    }
  });

// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.post('/users', function(req, res, next) {
// res.json(req.body)
// });

module.exports = router;
