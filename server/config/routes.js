var passport = require('passport');

var helpers = require('./helpers.js');

module.exports = function(app, express){
	app.get('/', function(req, res){
		res.render('index');
	});

	app.get('/login', function(req, res){
		res.send(200, 'login');
	});

	app.get('/auth/google',
  passport.authenticate('google', { 
  	scope: 'https://www.googleapis.com/auth/plus.login' 
  }));

  app.get('/auth/google/return', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
  	console.log(req);
    // Successful authentication, redirect home.
    res.redirect('/');
  });

  app.get('/logout',function(req, res){
  	req.logout();
  	res.redirect('/login');
  })
}