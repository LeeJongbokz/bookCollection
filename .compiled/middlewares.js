"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localsMiddleware = void 0;

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localsMiddleware = function localsMiddleware(req, res, next) {
  res.locals.siteName = "BookCollection";
  res.locals.routes = _routes["default"];
  res.locals.isAuthenticated = req.isAuthenticated();
  console.log(req.user);
  next();
};

exports.localsMiddleware = localsMiddleware;
//# sourceMappingURL=middlewares.js.map