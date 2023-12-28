import { Request, Response } from 'express';

  export const home = async (req: Request, res: Response) => {
    try {
      res.status(200).json({ status: 200, message: 'Welcome to AT API' });
    } catch (error: any) {
      res.status(400).json({ status: error.status, message: error.message });
    }
  };
  
