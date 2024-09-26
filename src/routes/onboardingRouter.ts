import express from "express";
import { changingPassword, verifyingOTP } from "../controllers/onboardingControllers";

const onboardingRouter = express.Router();

onboardingRouter.post("/api/v1/verifyOTP", verifyingOTP);
onboardingRouter.post("/api/v1/changePassword", changingPassword);
export default onboardingRouter;
