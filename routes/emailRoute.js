const express = require("express");
const { contactEmail, verifyEmail } = require("../controllers/emailController");
const router = express.Router();

router.route("/contactEmail").post(contactEmail);
router.route("/verifyEmail").post(verifyEmail);

module.exports = router;
