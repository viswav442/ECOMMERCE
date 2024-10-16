import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  mongoose
    .connect(
      `mongodb+srv://viswa9167:${process.env.MONGODB_PASSWORD}@ecommerce.sl4ie.mongodb.net/`
    )
    .then(() => {
      console.log("Database Connnected");
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("server is listening on port 4000");
});

app.use(
  cors({
    origin: "http://http://localhost:5173/",
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: [
      "Content-type",
      "Authorization",
      "Cache-control",
      "Expires",
      "Pragma",
    ],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
