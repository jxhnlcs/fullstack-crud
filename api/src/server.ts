import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes"

const app = express();

app.use(express.json());
app.use(cors({origin: '*'}))

app.use("/", userRoutes)

app.listen('3333', () => {
  console.log('API rodando com sucesso na porta 3333!')
})