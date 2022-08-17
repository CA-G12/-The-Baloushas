const path = require("path");
const express = require("express");
const helmet = require("helmet");
const router = require("./routes");
const { clientErrors, serverErrors } = require("./controllers/error");
const app = express();
app.set("port", process.env.PORT || 5500);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(router);
app.use(clientErrors);
app.use(serverErrors);

app.use(router, (req, res, next) => {
  next();
});

module.exports = app;
