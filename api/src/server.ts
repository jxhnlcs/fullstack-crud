import express from "express";
import userRoutes from "./routes/userRoutes"
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}))

app.use("/", userRoutes)

app.listen(8800)