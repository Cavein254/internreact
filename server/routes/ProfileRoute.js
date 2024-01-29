import express from "express";
import {
  createUserProfile,
  getUserProfile,
} from "../controllers/ProfileController.js";

const router = express.Router();

router.get("/profile", getUserProfile);
router.post("/profile", createUserProfile);

export default router;
