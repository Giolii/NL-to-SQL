import styles from "./index.module.css";
import sqlLogo from "./assets/sql-logo.png";

import { useState, type FormEvent } from "react";

interface GenerateResponse {
  response: string;
}

function App() {
  const [queryDescription, setQueryDescription] = useState<string>("");
  const [sqlQuery, setSqlQuery] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery);
  };

  const generateQuery = async (): Promise<string> => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ queryDescription: queryDescription }),
    });

    const data: GenerateResponse = await response.json();
    return data.response.trim();
  };

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="" className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setQueryDescription(e.target.value)}
          type="text"
          name="query-description"
          placeholder="Describe your query"
        />
        <input type="submit" value="Generate query" />
        <pre>{sqlQuery}</pre>
      </form>
    </main>
  );
}

export default App;
