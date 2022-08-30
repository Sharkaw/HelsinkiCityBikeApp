const express = require('express');
const router = express.Router();
const bikesdb = require('../services/bikes');

/* GET all stations */
router.get('/', async function(req, res, next) {
  try {
    res.json(await bikesdb.getStations(req.query.page));
  } catch (err) {
    console.error(`Error while getting information `, err.message);
    next(err);
  }
});

/* POST station */
router.post('/', async function(req, res, next) {
    try {
      res.json(await bikesdb.create(req.body));
    } catch (err) {
      console.error(`Error while creating bike station`, err.message);
      next(err);
    }
});

/* PUT station */
router.put('/:id', async function(req, res, next) {
    try {
      res.json(await bikesdb.update(req.params.id, req.body));
    } catch (err) {
      console.error(`Error while updating bike station`, err.message);
      next(err);
    }
});

/* DELETE Station */
router.delete('/:id', async function(req, res, next) {
    try {
      res.json(await bikesdb.remove(req.params.id));
    } catch (err) {
      console.error(`Error while deleting bike station`, err.message);
      next(err);
    }
  });

module.exports = router;