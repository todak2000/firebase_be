import express from 'express';

import { createUser } from '../controllers/userController';
import { home } from '../controllers/homeController';

const router = express.Router();


router.get('/home', home);
router.post('/users', createUser);
// router.get('/product/:id', getProduct);
// router.put('/update/:id', updateProduct);
// router.delete('/delete/:id', deleteProduct);

export default router;
