const express = require('express')
const router=express.Router()

router.get('/user', (req, res) => res.send('Hello World! user -GET'))
router.post('/user', (req, res) => res.send('Hello World! user -POST'))

module.exports= router;