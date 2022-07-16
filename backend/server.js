const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data.js");
const app = express();
dotenv.config();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Our api is running...");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const chatId = req.params.id;
  const chat = chats.find((chat) => {
    return chat._id === chatId;
  });
  res.send(chat);
});

app.listen(5000, () => console.log(`Server started on port ${port}`));
