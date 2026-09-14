import { Router } from 'express';
import { joyasController } from '../controllers/joyas.controller.js';

const router = Router();

router.get('/', joyasController.readJoyas);
router.get('/filtros', joyasController.readJoyasFiltered);
router.get('/joya/:id', joyasController.readJoyaById);

router.put('/:id', joyasController.replaceJoyaById);
router.patch('/:id', joyasController.updateJoyaById);

router.patch('/:id', joyasController.removeJoyaById);

export default router;