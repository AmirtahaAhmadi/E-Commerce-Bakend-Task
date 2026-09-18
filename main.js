import express from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./src/utils/errorHandler.util.js";
import { authRouter } from "./src/routes/auth/index.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/auth", authRouter);

app.use(errorMiddleware);

app.listen(port, () => console.log("App started!"));
