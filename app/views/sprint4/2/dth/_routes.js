var express = require('express')
var router = express.Router()

router.post('/choose-2-items', function (req, res) {

  // Items
  var answer1 = req.session.data['ivQuestionLogic'];
  // ukPassport payslipsP60 taxCreditsPayments transunion

  // Paylip or P60?
  var answer2 = req.session.data['payslipOrP60'];
  // payslip or p60

  // Voice ID?
  var answer3 = req.session.data['tcOptions'];
  // voiceIdYes voiceIdNo

  console.log(answer1, answer2, answer3);

  if (answer1 == 'ukPassport') {
    res.redirect('your-passport-details');
  } else {
    res.redirect(req.session.data['idvHandOffURL']);
  }
})

module.exports = router