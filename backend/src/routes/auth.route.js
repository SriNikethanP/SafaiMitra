import express from "express";
import { signup, login, logout,  checkAuth } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { order } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/signup", signup);

// router.post("/captainsignup", captainsignup);

router.post("/login", login);

// router.post("/captainlogin", captainlogin);

router.post("/logout", logout);


router.post("/order", order);

router.get("/auth", checkAuth);


export default router;