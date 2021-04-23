import mongoos from 'mongoose';

const userSchema = new mongoos.Schema({

    userName: {
        type: String,
        required: true,
        unique: true
    },

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    
    phoneNumber: {
        type: Number,
        required: true
    },

    gender: {
        type: String,
        required: true
    },

    imageLink: {
        type: String,
        default: ''
    },

    otp: {
        type: Number,
        default: 0
    }

},
{

    versionKey: false

});


const User = mongoos.model<any>("User",userSchema)

export default User;