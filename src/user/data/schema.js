import mongoose from 'mongoose';

module.exports = new mongoose.Schema({
    firstName : String,
    lastName : String,
    userName : String,
    email: {
        type: String,
        unique: true,
        required: [true, "email is required, can't be blank"],
        validate :{
            validator(v) {
                return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
              },
              message: 'Please enter a valid email',
            },
            index: true,
     },
     password: {
        type: String,
        required: [true, "password is required, can't be blank"],
        minlength: 6,
        maxlength: 255,
        unique : true,
        validate: {
          validator(v) {
            return /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{6,255}$/.test(
              v,
            );
          },
          message:
            'Please ensure password is a minimum of 6 characters and must contain an uppercase, lowercase, number and a special character',
        },
    },
    googleId : {
        type: String,
    },
    verified : {
        type : Boolean,
        default: false,
    },
    isAdmin :{
        type: Boolean,
        default:false
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        index: true
    },
    userType : {
        type : String,
        enum: ['customer','vendor','admin'],
        default: 'customer'
    }    
      
}
,{
    timestamps : true,
    _id : true
});