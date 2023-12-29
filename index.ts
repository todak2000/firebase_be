import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./src/routes";
import config from "./src/config";
import swagger from "./swagger";

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("dist"));

swagger(app);
app.use("/", router);

app.listen(config.port, () => {
  console.log(`Server is live @ ${config.hostUrl}`);
});
