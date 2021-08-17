var express = require('express');
var router = express.Router();

const BASE_PATH = 'sprint9/1/5-jury-service';
const ABS_BASE_PATH = `/${BASE_PATH}`;
const NEXT_PATH = '/sprint9/1/6-current-employment';

// Redirect /jury-service to first question in sequence
router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/have-been`);
});

router.post('/have-been', function (req, res) {
  // var juryConditional = req.body.juryService;
  // if (juryConditional === 'yes') {
  //   res.redirect('/sprint9/1/5-jury-service/period');
  // } else {
  //   res.redirect('/sprint9/1/6-current-employment');
  // }
  res.redirect(NEXT_PATH);
});

router.post('/period', function (req, res) {
  res.redirect(NEXT_PATH);
});

module.exports = router;
