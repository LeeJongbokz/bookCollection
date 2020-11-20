import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    
    email: {type: String, 'default': ''},
    avatarUrl: {type: String}
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email"});
 
const User = mongoose.model("User", UserSchema);

export default User;


