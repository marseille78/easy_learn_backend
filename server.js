const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST, PORT = 5050 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => console.log(`Server running...`));
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
