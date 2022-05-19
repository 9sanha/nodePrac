const espress = require('express');
const router = express.Router()
const postRouter = require('./post')

router.use('/signin',postRouter)

module.exports = router