const express = require('express');
const cors = require('cors');
const sequelize = require('./src/config/database');
const taskRoutes = require('./src/routes/taskRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);

sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });
});
