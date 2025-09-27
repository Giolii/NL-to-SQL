const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = process.env.port || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API");
});

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
