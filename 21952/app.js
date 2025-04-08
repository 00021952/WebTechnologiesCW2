const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const goalRoutes = require('./routes/goals');

const app = express();

// Middleware
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/goals', goalRoutes);

app.get('/', (req, res) => {
  res.render('index');
});

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
