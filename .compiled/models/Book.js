"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BookSchema = new _mongoose["default"].Schema({
  title: {
    type: String
  },
  authors: [String]
});

var Book = _mongoose["default"].model("Book", BookSchema);

var _default = Book;
exports["default"] = _default;
//# sourceMappingURL=Book.js.map