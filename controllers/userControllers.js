import passport from "passport";
import routes from "../routes";

import User from "../models/User";
import localStorage from "localStorage";
import { runInNewContext } from "vm";

export const home = (req, res) => res.render("home");

export const getJoin = (req, res) => res.render("join");

export const postJoin = async (req, res) => {
    
    const {
        body: {email, password}
    } = req;
    
    try{        
        
        const user = new User({
            email
        })
        
        
        await User.register(user, password);
        user.bookShelfUrl = "hello";
     
        localStorage.setItem('tempbookShelfUrl', user.bookShelfUrl);
    
        res.redirect(routes.intro);
        
        next();

    }catch(error){
            console.log(error);
            res.redirect(routes.join);
    }
}

export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => passport.authenticate('local', {
    failureRedirect: routes.login,
    succcesRedirect: routes.mylibrary
}); 

export const facebookLogin = passport.authenticate("facebook", {failWithError: true});

export const facebookLoginCallback = (accessToken, refreshToken, profile, cb) =>{
    console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => res.render("logout");
export const page1 = (req, res) => res.render("page1");
export const intro = (req, res) => res.render("intro");
export const myPage = (req, res) => res.render("mypage");
export const myLibrary = (req, res) => res.render("mylibrary");

export const bookPage = (req, res) => res.render("bookpage");

