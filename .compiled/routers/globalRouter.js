"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _passport = _interopRequireDefault(require("passport"));

var _routes = _interopRequireDefault(require("../routes"));

var _userControllers = require("../controllers/userControllers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var globalRouter = _express["default"].Router();

globalRouter.get(_routes["default"].home, _userControllers.home);
globalRouter.get(_routes["default"].join, _userControllers.getJoin);
globalRouter.post(_routes["default"].join, _userControllers.postJoin, _userControllers.postLogin);
globalRouter.get(_routes["default"].login, _userControllers.getLogin);
globalRouter.post(_routes["default"].login, _userControllers.postLogin);
globalRouter.get(_routes["default"].logout, _userControllers.logout);
globalRouter.get(_routes["default"].intro, _userControllers.getIntro);
globalRouter.post(_routes["default"].intro, _userControllers.postIntro);
globalRouter.get(_routes["default"].mylibrary, _userControllers.myLibrary);
globalRouter.get(_routes["default"].mypage, _userControllers.myPage);
globalRouter.get(_routes["default"].bookpage, _userControllers.bookPage);
globalRouter.get(_routes["default"].page1, _userControllers.page1);
globalRouter.get(_routes["default"].facebook, _userControllers.facebookLogin);
globalRouter.get(_routes["default"].facebookCallback, _passport["default"].authenticate('facebook', {
  failWithError: true
}, {
  failureRedirect: '/login'
}), _userControllers.postFacebookLogin);
var _default = globalRouter;
exports["default"] = _default;
//# sourceMappingURL=globalRouter.js.map