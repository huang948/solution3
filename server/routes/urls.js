const express = require("express");
const router = express.Router();

const { createShortUrl, getLongUrl } = require("../controllers/urls");

router.post("/", createShortUrl);

router.get("/:id", getLongUrl);

module.exports = router;
