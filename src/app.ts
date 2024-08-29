import express from "express";
import morgan from "morgan";
import routes from "./routes/api";


const app = express();

// Middleware setup
app.use(express.json());
app.use(morgan("dev"));

// Route handling
app.use("/", routes);  

export default app;
