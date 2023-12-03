const express = require("express");
const router = express.Router();
const { getAssignments, postAssignment } = require("../services/assignments");

router.get("/", getAssignments);
router.post("/", postAssignment);

module.exports = router;
