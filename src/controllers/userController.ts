import firebase from "../firebase";
import { Request, Response, NextFunction } from "express";
import User from "../models/user";
import { db } from "../firebase";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  setDoc,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

interface DataProps {
  id: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  authType?: string;
  role?: string;
}

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: DataProps = req.body;
    const newUser = doc(db, "Users", data.id);
    //   await setDoc(doc(db, 'users', data.id), data);
    await setDoc(newUser, {
      id: data.id,
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      authType: data.authType,
      role: data.role,
    });
    //   await addDoc(collection(db, 'users'), data);
    res
      .status(200)
      .json({ status: 200, message: "New user created successfully" });
  } catch (error: any) {
    res.status(400).json({ status: error.status, message: error.message });
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: DataProps = req.body;
    const docRef = doc(db, "Users", data.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      res.status(200).json({
        status: 200,
        data: docSnap.data(),
        message: "Data retrieved successfully!",
      });
    } else {
      throw new Error("No such document!");
    }
  } catch (error: any) {
    res.status(400).json({ status: error.status, message: error.message });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: DataProps = req.body;
    await deleteDoc(doc(db, "Users", data.id));
    res.status(200).json({ status: 200, message: "User deleted successfully" });
  } catch (error: any) {
    res.status(400).json({ status: error.status, message: error.message });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data: DataProps = req.body;
    await setDoc(doc(db, "Users", data.id), data, { merge: true });
    res.status(200).json({ status: 200, message: "User updated successfully" });
  } catch (error: any) {
    res.status(400).json({ status: error.status, message: error.message });
  }
};
