import UserDatabase from './data/db';
import UserRepository from './repository';
import UserController from './controller';
import express from 'express';

const userRoutes = () => {
    const database = new UserDatabase();
    const repository = new UserRepository(database);
    const router = express.Router();
    const controller = UserController( repository );
  
    router.route('/')
      .get(controller.getUsers)
      .post(controller.addUser)
  
    return router;
  }
  
  module.exports = userRoutes;