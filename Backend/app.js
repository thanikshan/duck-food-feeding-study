const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const sequelize = require("./dbConfig");
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:4200");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());

(async () => {
  await sequelize.authenticate();
  console.log("Connection has been established successfully.");
})();

require("./app/routes/route.js")(app);

app.listen(port, "0.0.0.0", () =>
  console.log(`LaptopOnRent app listening on port ${port}!`)
);
