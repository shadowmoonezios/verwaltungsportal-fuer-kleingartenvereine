const express = require('express');
const memberRoutes = require('./memberRoutes');

const router = express.Router();

router.use('/members', memberRoutes);

module.exports = router;
