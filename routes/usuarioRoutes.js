import express from 'express';
import { registrar, registrado, autenticar } from '../controllers/usuarioController.js';

const router = express.Router();

//Registro
router.post('/', registrar);
router.get('/login', autenticar);



export default router;