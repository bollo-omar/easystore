import GetUsers from './use-cases/get_users';
import AddUser from './use-cases/add_user';

module.exports = (repository) => {
    
  const getUsers = (req, res, next) => {
    const getUsersCase = GetUsers(repository);
    getUsersCase.execute()
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  const addUser = (req, res, next) => {
    const addUserCase = AddUser(repository);
    const { firstName, lastName,userName, email, password,userType} = req.body;
    addUserCase.execute({firstName, lastName, userName, email, password,userType})
      .then(
        result => { res.json(result) },
        err => { next(err) }
      );
  }

  return {
    getUsers,
    addUser
  }
}