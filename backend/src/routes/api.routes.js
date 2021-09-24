import express from 'express';
import cors from 'cors';

import cocktailController from '../controllers/cocktailController.js';

const router = express.Router();

router.use(cors());
router.use(express.json());

router.get('/cocktail', cocktailController.getCocktail);

export default router;