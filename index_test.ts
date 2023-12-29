import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/routes";

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("public"));

app.use("/", router);
