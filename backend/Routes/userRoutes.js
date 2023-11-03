const express = require("express");
const userRoutes = express.Router();
const {
  registerUser,
  authUser,
  allUsers,
} = require("../Controllers/userController");
const { protect } = require("../MiddleWare/authMiddleWare");

userRoutes
  .get("/", protect, allUsers)
  .post("/", registerUser)
  .post("/login", authUser);

module.exports = userRoutes;
