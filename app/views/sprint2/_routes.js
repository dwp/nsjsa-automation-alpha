var express = require('express')
var router = express.Router()

router.get('/idea2', function (req, res) {
  res.redirect('idea2/eligible');
})

module.exports = router