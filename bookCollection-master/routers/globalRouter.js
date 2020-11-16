import express from "express";
import passport from "passport";
import routes from "../routes.js";

import {home, getJoin, postJoin, getProfile, getLogin, postLogin1, postLogin2, logout, getIntro, myLibrary, myPage, getBookPage, getFriend, postFacebookLogin, postIntro, postBookPage, getAddFriend } from '../controllers/userControllers.js';
import { onlyPublic} from "../middlewares.js";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin2);

globalRouter.get(routes.login, onlyPublic, getLogin);
globalRouter.post(routes.login, onlyPublic, postLogin1);

globalRouter.get(routes.logout, logout);

globalRouter.get(routes.profile, getProfile);

globalRouter.get(routes.intro, getIntro);
globalRouter.post(routes.intro, postIntro);

globalRouter.get(routes.mylibrary, myLibrary);

globalRouter.get(routes.mypage, myPage);


globalRouter.get(routes.bookpage, getBookPage);
globalRouter.post(routes.bookpage, postBookPage);


globalRouter.get(routes.facebook, passport.authenticate('facebook'));

globalRouter.get(routes.facebookCallback, 
        passport.authenticate('facebook', {failureRedirect: '/'}),
        postFacebookLogin
);
                    
globalRouter.get(routes.friend, getFriend);
globalRouter.get(routes.addFriend, getAddFriend);



export default globalRouter;
