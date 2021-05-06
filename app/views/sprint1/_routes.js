var express = require('express')
var router = express.Router()

// router.get('/', function (req, res) {
//   res.redirect('sprint1/claimant-details');
// })

router.post('/markers', function (req, res) {
    var parentMarker = req.body['estimateStart'];
    // if(estimate === 'start-age') {
    //   res.redirect('age')
    // } else if (estimate === 'start-date') {
    //     res.redirect('date')
    // } else {
    //   res.redirect('change-past-hours')
    // }
    res.redirect('claimant-details');
})


module.exports = router