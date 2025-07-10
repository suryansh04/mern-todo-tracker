const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const app = require("./app");
const DB = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);
console.log(DB);
mongoose
  .connect(DB)
  .then((connection) => {
    console.log("Database connected Successfully");
  })
  .catch((err) => {
    console.log(`There is an error with your database ${err}`);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App started at PORT ${PORT}`);
});
