import { Router } from 'express';
import { validateAddAnggotaSchema, validateLogin } from '../handlers/validationHandlers';
import { addAnggotaHandler, getAnggotaHandler, loginHandler } from '../controllers/userController';
const router = Router();


router.post('/login', validateLogin as any, loginHandler as any)
router.post('/add-anggota', validateAddAnggotaSchema as any , addAnggotaHandler as any);
router.get('/get-anggota', getAnggotaHandler as any);


export default router;
