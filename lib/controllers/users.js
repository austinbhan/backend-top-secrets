const { Router } = require('express');
// const authenticate = require('../middleware/authenticate');
// const authorize = require('../middleware/authorize');
// const User = require('../models/User');
const UserService = require('../services/UserService');

// const ONE_DAY_IN_MS = 100 * 60 * 60 * 24;

module.exports = Router()
  .post('/', async (req, res, next) => { // What does this test do????
    try {
      const user = await UserService.create(req.body);
      res.json(user);
    } catch (e) {
      next(e);
    }
  });
