import express from 'express';
import { Login, Register ,Profile, ForgetPassword} from '../Controller/User.Controller.js';
import { UserAuthorization } from '../Validation/Authorization.js';

const router = express.Router()

// Register 
router.post('/register' ,Register);
// Login
router.post('/login' ,Login)
// profile 
router.get('/profile' ,UserAuthorization , Profile)
// Forget Password 

router.post('/forget-password', ForgetPassword)

export default router;