import express from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./src/utils/errorHandler.util.js";
import { authRouter } from "./src/routes/auth/auth.route.js";
import { userRouter } from "./src/routes/users/user.route.js";
import { categoryRouter } from "./src/routes/categories/category.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);

app.use(errorMiddleware);

app.listen(port, () => console.log("App started!"));
