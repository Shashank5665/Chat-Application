const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Our api is running...");
});

app.use("/api/user", userRoutes);

app.listen(5000, () => console.log(`Server started on port ${port}`));
