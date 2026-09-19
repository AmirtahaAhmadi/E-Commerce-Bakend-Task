import express from "express";
import dotenv from "dotenv";
import { errorMiddleware } from "./src/utils/errorHandler.util.js";
import { authRouter } from "./src/routes/auth/auth.route.js";
import { userRouter } from "./src/routes/users/user.route.js";
import { categoryRouter } from "./src/routes/categories/category.route.js";
import { productRouter } from "./src/routes/products/product.route.js";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use("/files", express.static("uploads"));

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/products", productRouter);

app.use(errorMiddleware);

app.listen(port, () => console.log("App started!"));
