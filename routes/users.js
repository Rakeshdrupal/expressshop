var express = require('express');
var csurf = require('csurf');
var passport = require('passport');
var router = express.Router();

var csrfProtection = csurf();
router.use(csrfProtection);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Get Sign Up page */

router.get('/signup',function(req,res,next){
  var messages = req.flash('error');
  res.render('user/signup',{csrfToken: req.csrfToken(),messages: messages, hasErrors: messages.length > 0});
});
router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/user/profile',
    failureRedirect: '/user/signup',
    failureFlash: true
}));

router.get('/profile',function(req,res,next){
  res.render('user/profile');

});

module.exports = router;
