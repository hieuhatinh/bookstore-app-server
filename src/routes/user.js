import express from "express";

import { userController } from "../controllers/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "user" });
});

/* 
  /user/login 
*/
router.post("/login", userController.login);

export default router;
