import express from "express";
import { errorMiddleware } from "./middlewares/error.middlewares.js";
const app = express();

app.use(express.json());

    //youre code here

app.use(errorMiddleware);

export default app;