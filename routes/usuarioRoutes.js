import express from 'express';
import { registrar, registrado } from '../controllers/usuarioController.js';

const router = express.Router();

//Registro
router.post('/', registrar);
router.get('/', registrado);



export default router;