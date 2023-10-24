const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('index') //it render the index.ejs
})

module.exports = router