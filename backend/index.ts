import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoute";
import authMiddleware from './middlewares/authMiddleware';
import logger from "./logger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/restaurant-listing";

app.use(express.json());

// Routes
app.use("/auth", authRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
  } as ConnectOptions)
  .then(() => {
    logger.info("Connected to MongoDB");
    app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));