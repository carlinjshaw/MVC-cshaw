const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes.js');

router.use('/data', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;