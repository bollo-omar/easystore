import mongoose from 'mongoose';
import schema from './schema';

module.exports = class UserDatabase {
  constructor() {
    return mongoose.model("User", schema);
  }
}