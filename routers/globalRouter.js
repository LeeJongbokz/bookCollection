import express from "express";
import passport from "passport";
import routes from "../routes";
import {home, getJoin, postJoin, getLogin, postLogin, logout, intro, myLibrary, myPage, bookPage, page1, facebookLogin, postFacebookLogin } from '../controllers/userControllers';

// 이 파일의 가장 주요한 목적은 라우트로 들어온 REST API 요청에 대해서 알맞은 콜백 함수를 실행시키는 것임


// Router()메소드는 새로운 router 객체를 만든다
// router 객체는 미들웨어 및 라우트의 분리된 인스턴스임
// 즉, 미들웨어 및 라우팅 기능만을 수행하는 '미니 앱'이라고 할 수 있음
// 여기서는 globalRouter = express.Router()를 통해 
// router 객체인 globalRouter로 라우팅 기능을 수행하도록 함 
const globalRouter = express.Router();

// globalRouter.get(routes.home, home)은 
// routes.home으로 들어오는 get요청에 대해서
// 콜백함수인 home을 실행시킴
// 콜백함수인 home은 userControllers.js에서 만들어서 import함
// 다른 콜백함수들도 마찬가지로 userControllers.js에서 만들어서 import함
globalRouter.get(routes.home, home);

// globalRouter.get(routes.join, getJoin)은
// routes.join으로 들어오는 get요청에 대해서
// 콜백함수인 getJoin을 실행시킴 
globalRouter.get(routes.join, getJoin);

// globalRouter.post(routes.join, postJoin, postLogin)은
// routes.join으로 들어오는 post요청에 대해서
// 콜백함수인 postJoin을 실행시킴
// 이 때, 콜백함수인 postJoin은 미들웨어 함수로서 기능해
// 함수 실행이 끝나면, 다음 콜백함수인 postLogin 함수가 실행됨
globalRouter.post(routes.join, postJoin, postLogin);

// globalRouter.get(routes.login, getLogin)은
// routes.login으로 들어오는 get요청에 대해서
// 콜백함수인 getLogin을 실행시킴
globalRouter.get(routes.login, getLogin);

// globalRouter.post(routes.login, postLogin)은
// routes.login으로 들어오는 post요청에 대해서
// 콜백함수인 postLogin을 실행시킴
globalRouter.post(routes.login, postLogin);

// globalRouter.get(routes.logout, logout)은
// routes.logout으로 들어오는 get요청에 대해서
// 콜백함수인 logout을 실행시킴
globalRouter.get(routes.logout, logout);

// globalRouter.get(routes.intro, intro)은
// routes.intro으로 들어오는 get요청에 대해서
// 콜백함수인 intro를 실행시킴
globalRouter.get(routes.intro, intro);

// globalRouter.get(routes.mylibrary, myLibrary)은
// routes.mylibrary로 들어오는 get요청에 대해서
// 콜백함수인 myLibrary를 실행시킴 
globalRouter.get(routes.mylibrary, myLibrary);


globalRouter.get(routes.mypage, myPage);
globalRouter.get(routes.bookpage, bookPage);
globalRouter.get(routes.page1, page1);

globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
    routes.facebookCallback,
    passport.authenticate('facebook', {failWithError: true}, { failureRedirect: '/login' }),
    postFacebookLogin
)

export default globalRouter;
