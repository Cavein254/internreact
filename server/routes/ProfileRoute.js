import express from "express";
import {
  createUserProfile,
  getUserProfile,
  loginUserProfile,
} from "../controllers/ProfileController.js";

import { createJob, getJobs } from "../controllers/JobController.js";

const router = express.Router();

router.get("/api/profile", getUserProfile);
router.post("/api/profile/new", createUserProfile);
router.post("/api/profile/login", loginUserProfile);
router.post("/api/job/new", createJob);
router.get("/api/jobs", getJobs);

export default router;
