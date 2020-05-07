import express from "express";
import passport from "passport";
import routes from "../routes";
import {home, getJoin, postJoin, getLogin, postLogin, logout, intro, myLibrary, myPage, bookPage, page1, facebookLogin, postFacebookLogin } from '../controllers/userControllers';


// Router()메소드는 새로운 router 객체를 만든다
// router 객체는 미들웨어 및 라우트의 분리된 인스턴스임
// 즉, 미들웨어 및 라우팅 기능만을 수행하는 '미니 앱'이라고 할 수 있음
// 여기서는 globalRouter = express.Router()를 통해 
// router 객체인 globalRouter로 라우팅 기능을 수행하도록 함 
const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.intro, intro);


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
