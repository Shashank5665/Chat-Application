const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data.js");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config();
connectDB();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

//----------------------------------------------------------------------------------------------------------------------

//MIDDLEWARES
app.use("/api/user", userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use("/api/chat", chatRoutes);

//----------------------------------------------------------------------------------------------------------------------

app.listen(5000, () => console.log(`Server started on port ${port}`));
