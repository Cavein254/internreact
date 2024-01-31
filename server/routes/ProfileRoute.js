import express from "express";
import {
  createUserProfile,
  getUserProfile,
} from "../controllers/ProfileController.js";

const router = express.Router();

router.get("/api/profile", getUserProfile);
router.post("/api/profile", createUserProfile);

export default router;
