const express = require("express");
const dotenv = require("dotenv");

const ProfileRoute = require("./routes/ProfileRoute.js");

dotenv.config();

const app = express();
app.use(express.json());

app.use(ProfileRoute);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
