import express from "express";

const router = express.Router();

router.get("/profile", getUserProfile);
router.post("/profile", createUserProfile);

export default router;
