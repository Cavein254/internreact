import express from "express";
import dotenv from "dotenv";
import ProfileRoute from "./routes/ProfileRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use(ProfileRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
