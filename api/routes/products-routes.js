import express from 'express';
import { listProducts, getProductById } from '../controllers/products-controller.js';

const router = express.Router();

// Hanterar GET /api/products
router.get('/', listProducts);

// Hanterar GET /api/products/:id
router.get('/:id', getProductById);

export default router;
