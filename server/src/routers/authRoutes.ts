import { Router } from 'express';
import { validateRegisterMemberSchema, validateLogin } from '../handlers/validationHandlers';
import { loginController, registerMemberController } from '../controllers/authControllers';
const router = Router();


router.post('/login', validateLogin as any, loginController as any)
router.post('/register', validateRegisterMemberSchema as any , registerMemberController as any);


export default router;

