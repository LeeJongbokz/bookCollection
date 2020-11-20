"use strict";

require("./db");

require("./models/User");

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config();

var PORT = process.env.PORT || 4000;

function handleListening() {
  console.log("Listening to localhost:4000/");
}

_app["default"].listen(PORT, handleListening);
//# sourceMappingURL=init.js.map