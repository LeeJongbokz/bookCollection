import express from "express";
import passport from "passport";
import routes from "../routes";
import {home, getJoin, postJoin, getLogin, postLogin, logout, intro, myPage, bookPage, page1, facebookLogin, postFacebookLogin } from '../controllers/userControllers';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.intro, intro);

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