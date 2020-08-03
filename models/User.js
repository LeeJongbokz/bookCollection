import mongoose from "mongoose";
import crypto from "crypto";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, 'default': ''},
    hashed_password: {type: String, required: true, 'default': ''},
    salt: {type: String, required: true},
    avatarUrl: {type: String},
    books:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }

    ],
    reviews:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ],
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]

})

UserSchema.virtual('password').set(function(password){
    this._password = password;
    this.salt = this.makeSalt();
    this.hashed_password = this.encryptPassword(password);
}).get(function(){return this._password});


UserSchema.method('encryptPassword', function(plainText, inSalt){
    if(inSalt){
        return crypto.createHmac('sha1', inSalt).update(plainText).digest('hex');
    }else{
        return crypto.createHmac('sha1', this.salt).update(plainText).digest('hex');
    }
});

UserSchema.method('makeSalt', function(){
    return Math.round((new Date().valueOf()*Math.random())) +'';
});


UserSchema.plugin(passportLocalMongoose, { usernameField: "email"});
 
const User = mongoose.model("User", UserSchema);

export default User;


