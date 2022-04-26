var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hello there!",
    user: "General Kenobi",
    added: new Date()
  },
  {
    text: "You are a bold one",
    user: "General Grievious",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post("/", function(req, res){
  res.redirect('/new');
})

router.get('/new', function(req, res, next){
  res.render('form',{})
});

router.post("/new", function(req, res){
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date()
  });
  res.redirect('/');
})

module.exports = router;
