const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

//----------------------------------------------------------------------------------------------------------------------
//ROUTES
app.get("/", (req, res) => {
  res.send("Our api is running...");
});
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);

app.listen(5000, () => console.log(`Server started on port ${port}`));
