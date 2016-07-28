var express = require('express');
var router = express.Router();
var csurf = require('csurf');
var Product = require('../models/product');
var crfProtection = csurf();



/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i += chunkSize) {
      //  console.log(docs.slice(i, i + chunkSize));
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });
  });

});


/* Get Sign Up page */

router.get('/user/singup',function(req,res,next){
  res.render('user/signup',{csrfToken: req.csrfToken()});
})

module.exports = router;
