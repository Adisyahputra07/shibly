import { Router } from 'express';
const router = Router();

import { validateAddAdmin, validateUpdateAdmin } from "../handlers/validationHandlers";
import { addAdminHandler, deleteAdminHandler, updateAdminHandler } from '../controllers/adminController';



router.post('/add-admin', validateAddAdmin as any , addAdminHandler as any);
router.put('/update-admin', validateUpdateAdmin as any , updateAdminHandler as any);
router.delete('/delete-admin' , deleteAdminHandler as any);


export default router;
