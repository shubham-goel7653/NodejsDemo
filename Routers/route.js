const express = require('express')
const router = express.Router()
const controller = require('../Controllers/controller1')
const validation = require('../MiddleWare/valid')

router.post('/firstController',validation.valid,controller.firstApi)

module.exports = router