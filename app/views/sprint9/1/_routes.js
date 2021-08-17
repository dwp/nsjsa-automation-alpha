var express = require('express')
var router = express.Router()

const BASE_PATH = 'sprint9/1/hand-off';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprint9/1/dth';

// router.post('/hand-off', function (req, res) {
//   res.redirect('1/eligible');
// })

router.post('/hand-off', function (req, res) {
  let data = req.session.data;
  const answer = data['confirmID'];

  if (answer === 'yes') {
    res.redirect(`${NEXT_PATH}`);
  } else {
    res.redirect('/sprint9/1/complete-confirmation?id=not-verified');
  };
});

module.exports = router