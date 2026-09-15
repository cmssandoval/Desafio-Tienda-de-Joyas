import { joyasController } from '../controllers/joyas.controller.js';
import { validatePagination } from '../middlewares/validatePagination.js';

import { Router } from 'express';
const router = Router();

router.get('/', validatePagination, joyasController.readJoyas);
router.get('/filtros', joyasController.readJoyasFiltered);
router.get('/joya/:id', joyasController.readJoyaById);

router.put('/:id', joyasController.replaceJoyaById);
router.patch('/:id', joyasController.updateJoyaById);

router.patch('/:id', joyasController.removeJoyaById);

export default router;