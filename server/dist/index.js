import "dotenv/config";
import express from "express";
import cors from "cors";
import generate from "./generate.js";
const app = express();
app.use(express.json());
app.use(cors());
const PORT = parseInt(process.env.PORT || "3005", 10);
app.get("/", (req, res) => {
    res.send("Hello World from our API");
});
app.post("/generate", async (req, res) => {
    const { queryDescription } = req.body;
    if (!queryDescription) {
        res.status(400).json({ response: "queryDescription is required" });
        return;
    }
    try {
        const sqlQuery = await generate(queryDescription);
        res.json({ response: sqlQuery });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ response: "Internal server error" });
    }
});
app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
});
//# sourceMappingURL=index.js.map