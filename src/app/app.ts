import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();
app.use(express.json());
app.use(cors());


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to test the Rest API works with typescript");
});

export default app;
