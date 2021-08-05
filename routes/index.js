var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'HOME PAGE' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'ABOUT ME' });
});
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'PROJECTS' });
});
router.get('/contacts', function(req, res, next) {
  res.render('contacts', { title: 'CONTACT ME' });
});

module.exports = router;
