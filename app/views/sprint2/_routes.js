var express = require('express')
var router = express.Router()

router.get('/idea2', function (req, res) {
  res.redirect('idea2/eligible');
})

router.post('/add-postal-address', function (req, res) {
  var answer = req.session.data['detailsAddDifferentPostalAddress'];
  if (answer == 'yes') {
    res.redirect('enter-postal-address');
  } else {
    res.redirect('contact-phone');
  }
})

module.exports = router