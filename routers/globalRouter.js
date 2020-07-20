import express from "express";
import passport from "passport";
import routes from "../routes";

import {home, getJoin, postJoin, getLogin, postLogin, logout, intro, myLibrary, myPage, bookPage, page1, facebookLogin, postFacebookLogin } from '../controllers/userControllers';


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

function buttonAction1(res){
    res.send('ok');
}

globalRouter.get(routes.test1, function(req,res){
    buttonAction1(res);
});


export default globalRouter;
