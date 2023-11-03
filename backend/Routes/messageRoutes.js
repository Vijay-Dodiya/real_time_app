const express = require("express");
const {
  allMessages,
  sendMessage,
} = require("../Controllers/messageController");
const { protect } = require("../MiddleWare/authMiddleWare");

const messageRoutes = express.Router();

messageRoutes.route("/:chatId").get(protect, allMessages);
messageRoutes.route("/").post(protect, sendMessage);

// messageRoutes
//   .get("/:chatId", protect, allMessages)
//   .post("/", protect, sendMessage);

module.exports = messageRoutes;
