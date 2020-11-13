import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const UserSchema = new mongoose.Schema({
    
    email: {type: String, unique: true, 'default': ''},
    avatarUrl: {type: String},
    friends:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
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

UserSchema.plugin(passportLocalMongoose, { usernameField: "email"});
 
const User = mongoose.model("User", UserSchema);

export default User;


