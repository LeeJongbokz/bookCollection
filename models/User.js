import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, 'default': ''},
    password: {type: String, required: true, 'default': ''},
    // salt: {type: String, required: true},
    book:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }

    ]
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email"});
 
const User = mongoose.model("User", UserSchema);

export default User;

