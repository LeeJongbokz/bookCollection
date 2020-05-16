// 이 파일의 주 목적은 라우트로 들어온 REST API 요청에 대해서 알맞은 콜백 함수를 실행시키는 것임

import express from "express";
import passport from "passport";

// routes.js파일에서 routes 객체를 import함
// 그 이유는 이 파일에서 라우팅 메소드를 정의할 때, 라우트 주소를 사용하기 위함임 
// 이 때, 여러 라우트 주소를 routes라는 하나의 객체에 묶어줘 편리하게 사용할 수 있도록 함 
import routes from "../routes";

// userControllers.js에 선언한 콜백함수들을 import함
// 그 이유는 여기서 라우트를 통해 들어오는 요청에 해당 콜백함수를 매칭시켜주기 위함임  
import {home, getJoin, postJoin, getLogin, postLogin, logout, intro, myLibrary, myPage, bookPage, page1, facebookLogin, postFacebookLogin } from '../controllers/userControllers';


// Router()메소드는 새로운 router 객체를 만든다
// router 객체는 미들웨어 및 라우트의 분리된 인스턴스임
// 즉, 미들웨어 및 라우팅 기능만을 수행하는 '미니 앱'임
// 여기서는 router 객체인 globalRouter로 라우팅 기능을 수행하도록 함 
const globalRouter = express.Router();

// routes.home으로 들어오는 get요청에 대해 콜백함수인 home을 실행시킴
// 콜백함수인 home은 userControllers.js에서 만들어서 import함
// 다른 콜백함수들도 마찬가지로 userControllers.js에서 만들어서 import함
globalRouter.get(routes.home, home);

// routes.join으로 들어오는 get요청에 대해 콜백함수인 getJoin을 실행시킴 
globalRouter.get(routes.join, getJoin);

// routes.join으로 들어오는 post요청에 대해 콜백함수인 postJoin을 실행시킴
// 이 때, 콜백함수인 postJoin은 미들웨어 함수임
// 따라서 함수 실행이 끝나면, 다음 콜백함수인 postLogin 함수가 실행됨
globalRouter.post(routes.join, postJoin, postLogin);

// 이하 동일
globalRouter.get(routes.login, getLogin);

// 이하 동일
globalRouter.post(routes.login, postLogin);

// 이하 동일
globalRouter.get(routes.logout, logout);

// 이하 동일
globalRouter.get(routes.intro, intro);

// 이하 동일
globalRouter.get(routes.mylibrary, myLibrary);

// 이하 동일
globalRouter.get(routes.mypage, myPage);

// 이하 동일
globalRouter.get(routes.bookpage, bookPage);

// 이하 동일
globalRouter.get(routes.page1, page1);

// 이하 동일
globalRouter.get(routes.facebook, facebookLogin);

globalRouter.get(
    routes.facebookCallback,
    passport.authenticate('facebook', {failWithError: true}, { failureRedirect: '/login' }),
    postFacebookLogin
)

// globalRouter 객체를 export함
// 그 이유는 app.js에서 import하기 위함임 
export default globalRouter;
