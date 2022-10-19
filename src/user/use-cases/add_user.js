import User from '../model';

module.exports = (repository) => {
  async function execute({firstName, lastName, userName, email, password,userType}){
    return repository.getByEmail(email)
      .then((user) => {
        return new Promise((resolve, reject) => {
          console.log("PARAMS", {firstName, lastName, userName, email, password,userType})
          if(!(firstName && lastName && userName && email && password && userType)){
            reject(new Error('validation failed'));
            return;
          }
          if(user){
            reject(new Error('Email Exists'));
            return;
          }
          const newUser = new User({firstName, lastName, userName, email, password,userType});
          resolve(newUser);
        })
        .then(user => {
          return repository.create(user);
        })
        .then((user)=>{
          return Promise.resolve(user);
        })
      })

  }
  return { execute }
}