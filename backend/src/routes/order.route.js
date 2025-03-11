import express from "express";
import { protectRoute } from "../middleware/auth.middleware";
import {order} from "../controllers/order.controller.js";


const router = express.Router();

router.post("/create-order", protectRoute, createorder);