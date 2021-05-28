const express = require("express");

const router = express.Router();

// LOCAL GET
router.get("/testConnection", (req, res) => {
  const ipAddress = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log(`Client's IP: ${ipAddress}`);
  console.log(
    `[${Date.now()}][SUCCESS][Client][GET][/api/testConnection] - Message: Test Success...`
  );
  res.sendStatus(200);
});

module.exports = router;
