import express from "express";
import {
  createUserProfile,
  getUserProfile,
  loginUserProfile,
} from "../controllers/ProfileController.js";

const router = express.Router();

router.get("/api/profile", getUserProfile);
router.post("/api/profile/create", createUserProfile);
router.post("/api/profile/login", loginUserProfile);

export default router;
