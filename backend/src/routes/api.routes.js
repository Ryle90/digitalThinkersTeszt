import express from 'express';
import cors from 'cors';

import cocktailController from '../controllers/cocktailController.js';

const router = express.Router();

router.use(cors());

//Commented because request does not have body - we have only get method, that cannot contain body
//router.use(express.json());

router.get('/cocktail', cocktailController.getCocktail);

export default router;