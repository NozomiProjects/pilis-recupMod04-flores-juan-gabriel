import { Router } from 'express';
import passport from 'passport';
import { getUsers, getUser, createUser, updateUser, deleteUser, signIn, signUp, protectedEndpoint, refresh } from '../controllers/user.controller';

const router = Router();

// Rutas públicas
router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/token', refresh);

// Rutas protegidas que requieren autenticación mediante token
router.get('/users', passport.authenticate('jwt', { session: false }), getUsers);
router.get('/users/:id', passport.authenticate('jwt', { session: false }), getUser);
router.post('/users', passport.authenticate('jwt', { session: false }), createUser);
router.put('/users/:id', passport.authenticate('jwt', { session: false }), updateUser);
router.delete('/users/:id', passport.authenticate('jwt', { session: false }), deleteUser);
router.post('/protected', passport.authenticate('jwt', { session: false }), protectedEndpoint);



export default router;
