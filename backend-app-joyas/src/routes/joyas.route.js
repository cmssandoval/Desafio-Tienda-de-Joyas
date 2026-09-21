import { joyasController } from '../controllers/joyas.controller.js';
import { logActivity } from '../middlewares/activityLogger.js';
import { validatePagination } from '../middlewares/validatePagination.js';

import { Router } from 'express';
const router = Router();

router.get('/', logActivity('joyas_readed', 'Joyas'), validatePagination, joyasController.readJoyas);
router.get('/filtros', logActivity('joyas_readed', 'Joyas'), joyasController.readJoyasFiltered);
router.get('/joya/:id', logActivity('joyas_readed', 'Joyas'), joyasController.readJoyaById);

router.put('/:id', joyasController.replaceJoyaById);
router.patch('/:id', joyasController.updateJoyaById);

router.patch('/:id', joyasController.removeJoyaById);

export default router;