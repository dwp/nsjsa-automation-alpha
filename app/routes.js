const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

router.use('/sprint1/', require('./views/sprint1/_routes'))
router.use('/sprint2/', require('./views/sprint2/_routes'))

// router.use("/sprint2/citizen-idv/1-eligibility/",require("./views/sprint2/idea1/_1-eligibility/_routes"));

module.exports = router
