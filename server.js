const app = require('./app');
const mongoose = require('mongoose');

const DB_HOST = "mongodb+srv://marseille78:s37HHjTJJNoqGsuC@cluster0.td8knft.mongodb.net/easy_learn_db?retryWrites=true&w=majority";

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(5050, () => console.log(`Server running...`));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });