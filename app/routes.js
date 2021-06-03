const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/sprint1/', require('./views/sprint1/_routes'))
router.use('/sprint2/', require('./views/sprint2/_routes'))

// Sprint 4 routes
router.use('/sprint4/', require('./views/sprint4/_routes'))
router.use('/sprint4/1/1-eligibility/', require('./views/sprint4/1/1-eligibility/_routes'))
router.use('/sprint4/2/1-eligibility/', require('./views/sprint4/2/1-eligibility/_routes'))
router.use('/sprint4/2/dth/', require('./views/sprint4/2/dth/_routes'))
router.use('/sprint4/2/3-details/', require('./views/sprint4/2/3-details/_routes'))

module.exports = router
