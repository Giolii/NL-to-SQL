import "dotenv/config";
import express from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 3005;

app.get("/", (req, res) => {
  res.send("Hello World from our API");
});

app.post("/generate", async (req, res) => {
  const queryDescription = req.body.queryDescription;
  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.listen(PORT, () => {
  console.log("Listening to port ", PORT);
});
