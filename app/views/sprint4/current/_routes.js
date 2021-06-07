const express = require('express');
const router = express.Router();

const BASE_PATH = 'sprint4/current';
const ABS_BASE_PATH = `/${BASE_PATH}`;

router.get('/', function (req, res) {
  res.redirect(`${ABS_BASE_PATH}/3-details/about-you`);
})

module.exports = router;
