const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

dotenv.config({ path: "../.env" });
connectDB();
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;

//----------------------------------------------------------------------------------------------------------------------

//MIDDLEWARES
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use(notFound);
app.use(errorHandler);

//----------------------------------------------------------------------------------------------------------------------

app.listen(5000, () => console.log(`Server started on port ${port}`));
