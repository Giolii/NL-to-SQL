import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import generate from "./generate.js";

const app = express();
app.use(express.json());

app.use(cors());

const PORT: number = parseInt(process.env.PORT || "3005", 10);

interface GenerateRequestBody {
  queryDescription: string;
}

interface GenerateResponse {
  response: string;
}

app.get("/", (req: Request, res: Response): void => {
  res.send("Hello World from our API");
});

app.post("/generate", async (req: Request<{}, GenerateResponse, GenerateRequestBody>, res: Response<GenerateResponse>): Promise<void> => {
  const { queryDescription } = req.body;

  if (!queryDescription) {
    res.status(400).json({ response: "queryDescription is required" });
    return;
  }

  try {
    const sqlQuery = await generate(queryDescription);
    res.json({ response: sqlQuery });
  } catch (error) {
    console.error(error);
    res.status(500).json({ response: "Internal server error" });
  }
});

app.listen(PORT, (): void => {
  console.log("Listening to port ", PORT);
});