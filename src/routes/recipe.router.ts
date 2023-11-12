import { Router } from 'express';
import passport from 'passport';
import { getRecipes, getRecipe, createRecipe, updateRecipe, deleteRecipe } from '../controllers/recipe.controller';

const router = Router();

// Rutas públicas

// Rutas protegidas que requieren autenticación mediante token
router.get('/recipes', passport.authenticate('jwt', { session: false }), getRecipes);
router.get('/recipes/:id', passport.authenticate('jwt', { session: false }), getRecipe);
router.post('/recipes', passport.authenticate('jwt', { session: false }), createRecipe);
router.put('/recipes/:id', passport.authenticate('jwt', { session: false }), updateRecipe);
router.delete('/recipes/:id', passport.authenticate('jwt', { session: false }), deleteRecipe);

export default router;
