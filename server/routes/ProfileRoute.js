const express = require("express");
const {
  createUserProfile,
  getUserProfile,
  loginUserProfile,
} = require("../controllers/ProfileController.js");

const {
  createJob,
  getJobDetails,
  getJobs,
} = require("../controllers/JobController.js");

const router = express.Router();

router.get("/api/profile", getUserProfile);
router.post("/api/profile/new", createUserProfile);
router.post("/api/profile/login", loginUserProfile);
router.post("/api/job/new", createJob);
router.get("/api/jobs", getJobs);
router.post("/api/job-details", getJobDetails);

module.exports = router;
