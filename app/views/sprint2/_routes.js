var express = require('express')
var router = express.Router()

router.get('/1b', function (req, res) {
  res.redirect('1b/eligible');
})

router.post('/1a/choose', function (req, res) {
  var answer = req.session.data['sign-in'];
  if (answer == 'government-gateway') {
    res.redirect('https://www.access.service.gov.uk/login/signin/creds');
  } else if (answer == 'govuk-verify') {
    res.redirect('https://www.tax.service.gov.uk/ida/login');
  } else {
    res.redirect(req.session.data['idvHandOffURL']);
  }
})

router.post('/3/check-details', function (req, res) {
  var answer = req.session.data['changed-address'];
  if (answer == 'yes') {
    res.redirect('new-address');
  } else {
    res.redirect('check-details');
  }
})

router.post('/3-1/add-postal-address', function (req, res) {
  var answer = req.session.data['changed-address'];
  if (answer == 'yes') {
    res.redirect('enter-postal-address');
  } else {
    res.redirect('contact-phone');
  }
})

module.exports = router