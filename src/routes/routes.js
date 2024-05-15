const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.post('/cadastro/novo', controller.salvarDados);

module.exports = router;
