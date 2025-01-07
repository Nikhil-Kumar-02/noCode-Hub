import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
const port = 4000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  return res.json({
    success: true,
    message: "Your server is running well",
  });
});
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
