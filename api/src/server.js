const { config } = require("dotenv");
const express = require("express");

require("express-async-errors");

const routes = require("./app/routes");
const cors = require("./app/middlewares/cors");
const errorHandler = require("./app/middlewares/errorHandler");

const app = express();

app.use(express.json());
config();

app.use(cors);

app.use(routes);

app.use(errorHandler);

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`🔥 Server started at http://localhost:${port}' 🔥`);
});
