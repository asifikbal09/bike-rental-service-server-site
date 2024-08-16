import { Router } from 'express';
import { AuthControllers } from './auth.controller';
import validateRequest from '../../middlewares/validationRequest';
import { AuthValidations } from './auth.validation';

const router = Router();

router.post(
  '/signup',
  validateRequest(AuthValidations.createUserValidationSchema),
  AuthControllers.createUser,
);

export const AuthRoutes = router;
