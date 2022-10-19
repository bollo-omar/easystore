import express from 'express';
import userRoutes from './user/routes';


const Routes = (dependencies) => {
  const router = express.Router();
  router.use('/users', userRoutes(dependencies));
  ///router.use('/classes', classRoutes(dependencies));
  return router;
}

module.exports = Routes;