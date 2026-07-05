import express from "express";
import router from "./Routes/app.Routes.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/allbooks", router);

const PORT = 3000;
const connection = () => {
  console.log(`Connected successfully to port${PORT}`);
};
app.listen(PORT, connection);
