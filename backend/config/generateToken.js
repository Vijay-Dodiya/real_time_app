const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const privateKey = fs.readFileSync(
  path.resolve(__dirname, "../../private.key"),
  "utf-8"
);

const generateToken = (id) => {
  return jwt.sign({ id }, "vijay", {
    expiresIn: "30d",
  });
};
module.exports = generateToken;
