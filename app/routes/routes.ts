import express from "express";
import homeController from "../controllers/home_controller";

const router = express.Router();

//homepage
router.get('/', homeController.getHomeController);

export default router;