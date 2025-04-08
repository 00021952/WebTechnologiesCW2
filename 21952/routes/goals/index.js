const express = require('express');
const router = express.Router();
const goalsController = require('../../controllers/goals');

router.get('/', goalsController.getAllGoals);
router.get('/add', goalsController.getAddGoal);
router.post('/add', goalsController.postAddGoal);
router.get('/:id/edit', goalsController.getEditGoal);
router.post('/:id/edit', goalsController.postEditGoal);
router.post('/:id/delete', goalsController.postDeleteGoal);

module.exports = router;
