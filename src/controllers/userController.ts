import firebase from "../firebase";
import { Request, Response, NextFunction } from 'express';
import User from "../models/user";
import { db } from "../firebase";
import {
    getFirestore,
    collection,
    doc,
    addDoc,
    getDoc,
    getDocs,
    updateDoc,
    deleteDoc,
  } from 'firebase/firestore';
  
  

  export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      await addDoc(collection(db, 'users'), data);
      res.status(200).json({ status: 200, message: 'New user created successfully' });
    } catch (error: any) {
      res.status(400).json({ status: error.status, message: error.message });
    }
  };
  
