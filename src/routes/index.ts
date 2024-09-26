import express, { Request, Response, NextFunction } from "express";
import onboardingRouter from "./onboardingRouter";
import homeRouter from "./homeRouter";

const router = express.Router();
router.use(homeRouter)
router.use(onboardingRouter);

router.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).send({ status: 404, message: "Route not found" });
});

export default router;
