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


router.post('/choice', function (req, res) {
  var answer = req.session.data['sign-in'];
  if (answer == 'government-gateway') {
    res.redirect('https://www.access.service.gov.uk/login/signin/creds');
  } else if (answer == 'govuk-verify') {
    res.redirect('https://www.signin.service.gov.uk/start');
  } else {
    res.redirect(req.session.data['idvHandOffURL']);
  }
})


module.exports = router