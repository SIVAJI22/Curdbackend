var express=require('express')
var router=express.Router();
var adminusers=require('../models/admin')
router.post('/ad', async function(req,res){
    var data = new adminusers(req.body)
    await data.save()
    res.json({
        status:"succcess",
        message:"admin register successfuly"
    })
})
// user login



router.post("/login", async function (req, res) {
    try {
      let data = await adminusers.findOne({ email: req.body.email });
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
module.exports=router;