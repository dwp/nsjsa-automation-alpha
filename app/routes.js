const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/sprint1/', require('./views/sprint1/_routes'))
router.use('/sprint2/', require('./views/sprint2/_routes'))

// Sprint 4 routes
router.use('/sprint4/', require('./views/sprint4/_routes'))

// H1 V1
router.use('/sprint4/hypothesis1/v1/1-eligibility/', require('./views/sprint4/hypothesis1/v1/1-eligibility/_routes'))
router.use('/sprint4/hypothesis1/v1/dth/', require('./views/sprint4/hypothesis1/v1/dth/_routes'))
router.use('/sprint4/hypothesis1/v1/3-details/', require('./views/sprint4/hypothesis1/v1/3-details/_routes'))
router.use('/sprint4/hypothesis1/v1/4-claim-start/', require('./views/sprint4/hypothesis1/v1/4-claim-start/_routes'))

// H1 V2
router.use('/sprint4/hypothesis1/v2/1-eligibility/', require('./views/sprint4/hypothesis1/v2/1-eligibility/_routes'))
router.use('/sprint4/hypothesis1/v2/dth/', require('./views/sprint4/hypothesis1/v2/dth/_routes'))
router.use('/sprint4/hypothesis1/v2/3-details/', require('./views/sprint4/hypothesis1/v2/3-details/_routes'))
router.use('/sprint4/hypothesis1/v2/4-claim-start/', require('./views/sprint4/hypothesis1/v2/4-claim-start/_routes'))

// H2 V1
router.use('/sprint4/hypothesis2/v1/1-eligibility/', require('./views/sprint4/hypothesis2/v1/1-eligibility/_routes'))
router.use('/sprint4/hypothesis2/v1/dth/', require('./views/sprint4/hypothesis2/v1/dth/_routes'))
router.use('/sprint4/hypothesis2/v1/3-details/', require('./views/sprint4/hypothesis2/v1/3-details/_routes'))
router.use('/sprint4/hypothesis2/v1/4-claim-start/', require('./views/sprint4/hypothesis2/v1/4-claim-start/_routes'))

module.exports = router
