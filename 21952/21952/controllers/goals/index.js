const { v4: uuid } = require('uuid');
let goals = [];

exports.getAllGoals = (req, res) => {
  res.render('goals', { goals });
};

exports.postAddGoal = (req, res) => {
  const { title, description } = req.body;
  if (!title || title.trim().length < 3 || !description || description.trim().length < 5) {
    return res.status(400).render('addGoal', {
      error: 'Invalid input. Title must be at least 3 characters and description at least 5.',
    });
  }
  goals.push({ id: uuid(), title: title.trim(), description: description.trim() });
  res.redirect('/goals');
};

exports.postAddGoal = (req, res) => {
  const { title, description } = req.body;
  goals.push({ id: uuid(), title, description });
  res.redirect('/goals');
};

exports.getEditGoal = (req, res) => {
  const goal = goals.find(g => g.id === req.params.id);
  res.render('editGoal', { goal });
};

exports.postEditGoal = (req, res) => {
  const { title, description } = req.body;
  const goal = goals.find(g => g.id === req.params.id);
  if (!goal) return res.redirect('/goals');

  if (!title || title.trim().length < 3 || !description || description.trim().length < 5) {
    return res.status(400).render('editGoal', {
      goal,
      error: 'Please enter valid title and description.',
    });
  }

  goal.title = title.trim();
  goal.description = description.trim();
  res.redirect('/goals');
};

exports.postDeleteGoal = (req, res) => {
  goals = goals.filter(g => g.id !== req.params.id);
  res.redirect('/goals');
};
