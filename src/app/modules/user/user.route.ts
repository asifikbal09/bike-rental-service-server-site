import { Router } from 'express';
import auth from '../../middlewares/auth';
import { USER_ROLE } from './user.constant';
import { UserControllers } from './user.controller';

const router = Router();

router.get(
  '/me',
  auth(USER_ROLE.user, USER_ROLE.admin),
  UserControllers.getSingleUser,
);

router.put(
  '/me',
  auth(USER_ROLE.user, USER_ROLE.admin),
  UserControllers.updateUserInfo,
);

export const UserRoutes = router;
