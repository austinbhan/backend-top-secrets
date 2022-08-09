const { Router } = require('express');
const Secret = require('../models/Secret');
const router = Router();

router
  .get('/', async (req, res) => {
    const secrets = await Secret.getAll();
    res.json(secrets);
  });

module.exports = router;
