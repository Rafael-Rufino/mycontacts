const express = require("express");
require("express-async-errors");

const routes = require("./app/routes");

const app = express();

app.use(express.json());

app.use(routes);

app.use((error, request, response, next) => {
  if (error) {
    return response.sendStatus(500);
  }
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log("🔥 Server started at http://localhost:3333' 🔥");
});
