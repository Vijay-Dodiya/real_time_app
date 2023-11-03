const express = require("express");
const chatRoutes = express.Router();

const { protect } = require("../MiddleWare/authMiddleWare");
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require("../Controllers/chatControllers");

chatRoutes
  .post("/", protect, accessChat)
  .get("/", protect, fetchChats)
  .post("/group", protect, createGroupChat)
  .put("/rename", protect, renameGroup)
  .put("/groupremove", protect, removeFromGroup)
  .put("/groupadd", protect, addToGroup);

module.exports = chatRoutes;
