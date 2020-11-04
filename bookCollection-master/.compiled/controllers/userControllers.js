"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.postIntro = exports.getIntro = exports.bookPage = exports.myLibrary = exports.myPage = exports.page1 = exports.logout = exports.postFacebookLogin = exports.facebookLoginCallback = exports.facebookLogin = exports.postLogin = exports.getLogin = exports.postJoin = exports.getJoin = exports.home = void 0;

var _passport = _interopRequireDefault(require("passport"));

var _routes = _interopRequireDefault(require("../routes"));

var _User = _interopRequireDefault(require("../models/User"));

var _Book = _interopRequireDefault(require("../models/Book"));

var _localStorage = _interopRequireDefault(require("localStorage"));

var _expressSession = _interopRequireDefault(require("express-session"));

var _vm = require("vm");

var _request = _interopRequireDefault(require("request"));

var _queryString = _interopRequireDefault(require("query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var home = function home(req, res) {
  return res.render("home");
};

exports.home = home;

var getJoin = function getJoin(req, res) {
  return res.render("join");
};

exports.getJoin = getJoin;

var postJoin = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var _req$body, email, password, user;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            _context.prev = 1;
            user = new _User["default"]({
              email: email,
              password: password
            });
            _context.next = 5;
            return _User["default"].register(user, password);

          case 5:
            user.bookShelfUrl = "hello";

            _localStorage["default"].setItem('tempbookShelfUrl', user.bookShelfUrl);

            res.redirect(_routes["default"].intro);
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.redirect(_routes["default"].join);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function postJoin(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.postJoin = postJoin;

var getLogin = function getLogin(req, res) {
  return res.render("login");
};

exports.getLogin = getLogin;

var postLogin = _passport["default"].authenticate('local', {
  failureRedirect: _routes["default"].home,
  successRedirect: _routes["default"].intro
});

exports.postLogin = postLogin;

var facebookLogin = _passport["default"].authenticate("facebook", {
  failWithError: true
});

exports.facebookLogin = facebookLogin;

var facebookLoginCallback = function facebookLoginCallback(accessToken, refreshToken, profile, cb) {
  console.log(accessToken, refreshToken, profile, cb);
};

exports.facebookLoginCallback = facebookLoginCallback;

var postFacebookLogin = function postFacebookLogin(req, res) {
  res.redirect(_routes["default"].home);
};

exports.postFacebookLogin = postFacebookLogin;

var logout = function logout(req, res) {
  req.flash("info", "Logged out, see you later");
  req.session.destroy();
  req.logout();
  res.redirect(_routes["default"].home);
};

exports.logout = logout;

var page1 = function page1(req, res) {
  return res.render("page1");
};

exports.page1 = page1;

var myPage = function myPage(req, res) {
  return res.render("mypage");
};

exports.myPage = myPage;

var myLibrary = function myLibrary(req, res) {
  return res.render("mylibrary");
};

exports.myLibrary = myLibrary;

var bookPage = function bookPage(req, res) {
  return res.render("bookpage");
};

exports.bookPage = bookPage;

var getIntro = function getIntro(req, res) {
  return res.render("intro");
};

exports.getIntro = getIntro;

var postIntro = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var bookName, option, json;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            bookName = req.body.bookName;
            option = {
              query: bookName
            };

            _request["default"].get({
              uri: "https://dapi.kakao.com/v3/search/book?target=title",
              qs: option,
              headers: {
                Authorization: "KakaoAK 78d32ce1cac5c4d2a998590338bef88d"
              }
            }, function (err, callbackRes, body) {
              json = JSON.parse(body);
              console.log(json.documents[0].title);
              console.log(json.documents[0].authors);
              var title = json.documents[0].title;
              var authors = json.documents[0].authors;

              try {
                var book = _Book["default"].create({
                  title: title,
                  authors: authors
                });

                console.log(book);
              } catch (error) {
                console.log(error);
              }

              res.send(title);
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function postIntro(_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();

exports.postIntro = postIntro;
//# sourceMappingURL=userControllers.js.map