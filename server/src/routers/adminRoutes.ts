import { Router } from 'express';
const router = Router();

import { validateAddAdmin, validateUpdateAdmin } from "../handlers/validationHandlers";
import { addAdminController, deleteAdminController, getMemberHandler, updateAdminController } from '../controllers/adminController';


router.post('/add-admin' ,validateAddAdmin as any , addAdminController as any);
router.put('/update-admin', validateUpdateAdmin as any , updateAdminController as any);
router.delete('/delete-admin', deleteAdminController as any);
router.get('/get-member', getMemberHandler as any);



export default router;
