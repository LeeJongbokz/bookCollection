"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _passportLocalMongoose = _interopRequireDefault(require("passport-local-mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserSchema = new _mongoose["default"].Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    'default': ''
  },
  password: {
    type: String,
    required: true,
    'default': ''
  },
  // salt: {type: String, required: true},
  book: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Book"
  }]
});
UserSchema.plugin(_passportLocalMongoose["default"], {
  usernameField: "email"
});

var User = _mongoose["default"].model("User", UserSchema);

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=User.js.map