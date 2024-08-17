import { Router } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validationRequest';
import { BikeValidations } from './bike.validation';
import { BikeControllers } from './bike.controller';

const router = Router();

router.post(
  '/',
  auth(USER_ROLE.admin),
  validateRequest(BikeValidations.createBikeValidationSchema),
  BikeControllers.createBike,
);

router.get(
  '/',
  BikeControllers.getAllBike,
);

router.put(
  '/:id',
  auth(USER_ROLE.admin),
  BikeControllers.updateBikeInfo,
);

export const BikeRoutes = router;
