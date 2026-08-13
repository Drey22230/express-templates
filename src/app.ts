import express from "express";
import { errorMiddleware } from "./middlewares/error.middlewares.js";
import { helloWorld } from "./modules/Hello World/hello.js";
import { hi } from "./modules/Hi/hi.js";
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send(helloWorld());
});

app.get("/hi", (req, res) => {
    res.send(hi());
});

app.use(errorMiddleware);

export default app;