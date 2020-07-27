import express from "express";
import passport from "passport";
import routes from "../routes";

import {home, getJoin, postJoin, getLogin, postLogin, logout, getIntro, myLibrary, myPage, bookPage, page1, facebookLogin, postFacebookLogin, postIntro } from '../controllers/userControllers';


const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.intro, getIntro);
globalRouter.post(routes.intro, postIntro);

globalRouter.get(routes.mylibrary, myLibrary);

globalRouter.get(routes.mypage, myPage);

globalRouter.get(routes.bookpage, bookPage);
globalRouter.get(routes.page1, page1);

globalRouter.get('/auth/facebook', passport.authenticate('facebook'));

globalRouter.get('/auth/facebook/callback', 
                 passport.authenticate('facebook', {failureRedirect: '/login'}),
                 function(req, res){
                     res.redirect('/');
});
                    
export default globalRouter;
