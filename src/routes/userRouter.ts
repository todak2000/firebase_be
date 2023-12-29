import express from "express";

import {
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/api/v1/user", createUser);

// router.post('/api/v1/users', createUser);
userRouter.get("/api/v1/user", getUser);
userRouter.put("/api/v1/user", updateUser);
userRouter.delete("/api/v1/user", deleteUser);

// router.put('/update/:id', updateProduct);
// router.delete('/delete/:id', deleteProduct);
export default userRouter;
