const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Sprint 8 routes
router.use('/sprint9/1/', require('./views/sprint9/1/_routes'))
router.use('/sprint9/1/1-eligibility/', require('./views/sprint9/1/1-eligibility/_routes'))
router.use('/sprint9/1/2-details/', require('./views/sprint9/1/2-details/_routes'))
router.use('/sprint9/1/3-claim-start/', require('./views/sprint9/1/3-claim-start/_routes'))
router.use('/sprint9/1/4-other-benefits/', require('./views/sprint9/1/4-other-benefits/_routes'))
router.use('/sprint9/1/5-jury-service/', require('./views/sprint9/1/5-jury-service/_routes'))
router.use('/sprint9/1/6-current-employment/', require('./views/sprint9/1/6-current-employment/_routes'))
router.use('/sprint9/1/7-previous-employment/', require('./views/sprint9/1/7-previous-employment/_routes'))
router.use('/sprint9/1/8-abroad/', require('./views/sprint9/1/8-abroad/_routes'))
router.use('/sprint9/1/9-pensions/', require('./views/sprint9/1/9-pensions/_routes'))
router.use('/sprint9/1/10-education/', require('./views/sprint9/1/10-education/_routes'))
router.use('/sprint9/1/dth/', require('./views/sprint9/1/dth/_routes'))

// Sprint 8 routes
router.use('/sprint8/1/', require('./views/sprint8/1/_routes'))
router.use('/sprint8/1/1-eligibility/', require('./views/sprint8/1/1-eligibility/_routes'))
router.use('/sprint8/1/2-details/', require('./views/sprint8/1/2-details/_routes'))
router.use('/sprint8/1/3-claim-start/', require('./views/sprint8/1/3-claim-start/_routes'))
router.use('/sprint8/1/4-other-benefits/', require('./views/sprint8/1/4-other-benefits/_routes'))
router.use('/sprint8/1/5-jury-service/', require('./views/sprint8/1/5-jury-service/_routes'))
router.use('/sprint8/1/6-current-employment/', require('./views/sprint8/1/6-current-employment/_routes'))
router.use('/sprint8/1/7-previous-employment/', require('./views/sprint8/1/7-previous-employment/_routes'))
router.use('/sprint8/1/8-abroad/', require('./views/sprint8/1/8-abroad/_routes'))
router.use('/sprint8/1/9-pensions/', require('./views/sprint8/1/9-pensions/_routes'))
router.use('/sprint8/1/10-education/', require('./views/sprint8/1/10-education/_routes'))
router.use('/sprint8/1/dth/', require('./views/sprint8/1/dth/_routes'))

// Sprint 4 routes
router.use('/sprint4/', require('./views/sprint4/_routes'))

// Current pages for personal info and claim start
router.use('/sprint4/current/', require('./views/sprint4/current/_routes'))
router.use('/sprint4/current/3-details/', require('./views/sprint4/current/3-details/_routes'))
router.use('/sprint4/current/4-claim-start/', require('./views/sprint4/current/4-claim-start/_routes'))

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

// H2 V2
router.use('/sprint4/hypothesis2/v2/1-eligibility/', require('./views/sprint4/hypothesis2/v2/1-eligibility/_routes'))
router.use('/sprint4/hypothesis2/v2/dth/', require('./views/sprint4/hypothesis2/v2/dth/_routes'))
router.use('/sprint4/hypothesis2/v2/3-details/', require('./views/sprint4/hypothesis2/v2/3-details/_routes'))
router.use('/sprint4/hypothesis2/v2/4-claim-start/', require('./views/sprint4/hypothesis2/v2/4-claim-start/_routes'))

// Sprint 2 routes
router.use('/sprint2/', require('./views/sprint2/_routes'))

// Sprint 1 routes
router.use('/sprint1/', require('./views/sprint1/_routes'))

module.exports = router
