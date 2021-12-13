module.exports  = class User{
    constructor({
        firstName=null,
        lastName=null,
        userName=null,
        email,
        password,
        userType=null}){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.userType = userType;
    }
}