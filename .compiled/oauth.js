"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socialLogin = {
  facebook: {
    clientID: "517541762243918",
    clientSecret: "682edc9571d85a2a7cfb9146625dedfb",
    callbackURL: 'https://www.bookcollection.co.kr/auth/facebook/callback'
  }
};
var _default = socialLogin;
exports["default"] = _default;
//# sourceMappingURL=oauth.js.map