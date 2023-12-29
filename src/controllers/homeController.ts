import { Request, Response } from "express";
import config from "../config";
export const home = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      status: 200,
      message: `Welcome to Firebase/Node CRUD API documentation, visit ${
        process.env.NODE_ENV !== "production"
          ? `${config.hostUrl}/api-docs`
          : `https://firebase-be.onrender.com/api-docs`
      }`,
    });
  } catch (error: any) {
    res.status(400).json({ status: error.status, message: error.message });
  }
};
