import express from "express";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import { ConnectDB } from "./lib/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/api/auth", authRouter);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDB();
})