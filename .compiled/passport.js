"use strict";

var _passport = _interopRequireDefault(require("passport"));

var _User = _interopRequireDefault(require("./models/User"));

var _passportFacebook = _interopRequireDefault(require("passport-facebook"));

var _userControllers = require("./controllers/userControllers");

var _routes = _interopRequireDefault(require("./routes"));

var _oauth = _interopRequireDefault(require("./oauth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_passport["default"].use(_User["default"].createStrategy());

_passport["default"].use(new _passportFacebook["default"]({
  clientID: _oauth["default"].facebook.clientID,
  clientSecret: _oauth["default"].facebook.clientSecret,
  callbackURL: _oauth["default"].facebook.callbackURL,
  profileFields: ["id", "displayName", "photos", "email"],
  scope: ["public_profile", "email"]
}, _userControllers.facebookLoginCallback));

_passport["default"].serializeUser(_User["default"].serializeUser());

_passport["default"].deserializeUser(_User["default"].deserializeUser());
//# sourceMappingURL=passport.js.map