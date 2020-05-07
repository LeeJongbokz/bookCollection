import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// const UserSchema = new.mongoose.Schema({})로,
// User document를 저장할 수 있는 스키마를 생성함
// 스키마의 프로퍼티로는 name, email, bookShelfUrl을 선언함
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    bookShelfUrl: String
})

UserSchema.plugin(passportLocalMongoose, { usernameField: "email"});
 
// const model = mongoose.model("User", UserSchema);
// 스키마로 실제 객체를 생성하기 위해서는 model을 선언해야 함
// model은 실제 객체(여기서는 document)를 생성할 수 있는 생성자 함수임 
// "User"는 MongoDB collection의 이름이 됨
const model = mongoose.model("User", UserSchema);

export default model;
