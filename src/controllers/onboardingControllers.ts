import { Request, Response, NextFunction } from "express";
import { changePassword, verifyOTP } from "../firebase/onboarding";
export const verifyingOTP = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const data: { userId: string; code: string } = req.body;
    const result = await verifyOTP(data);

    if (result) {
      res.status(result.status).json({ ...result });
    } else {
      res.status(500).json({ status: 'error', message: 'Failed to verify OTP' });
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(400).json({ status: 'error', message: error.message });
    } else {
      res.status(400).json({ status: 'error', message: 'An unknown error occurred' });
    }
  }
};

export const changingPassword = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const data: {
        userId: string;
        confirmNewPassword: string;
        newPassword: string;
      }= req.body;
      const result = await changePassword(data);
  
      if (result) {
        res.status(result.status).json({ ...result });
      } else {
        res.status(500).json({ status: 'error', message: 'Failed to change Password' });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ status: 'error', message: error.message });
      } else {
        res.status(400).json({ status: 'error', message: 'An unknown error occurred' });
      }
    }
  };