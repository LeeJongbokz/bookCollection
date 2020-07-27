import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import Book from "../models/Book";
import Review from "../models/Review";

import localStorage from "localStorage";
import session from "express-session";
import { runInNewContext } from "vm";
import request from "request";
import querystring from "query-string";


export const home = (req, res) => res.render("home");

export const getJoin = (req, res) => res.render("join");
   
export const postJoin = async(req, res, next) => {

    const {
        body: {email, password}
    } = req;

    try{        
        const user = new User({
            email,
            password
        })
        
        
        await User.register(user, password);

        user.bookShelfUrl = "hello";
     
        localStorage.setItem('tempbookShelfUrl', user.bookShelfUrl);
    
        res.redirect(routes.intro);

    }catch(error){
        console.log(error);
        res.redirect(routes.join);
    }
}

export const getLogin = (req, res) => res.render("login");
export const postLogin = passport.authenticate('local', {
    failureRedirect: routes.home,
    successRedirect: routes.intro
}); 

export const facebookLogin = passport.authenticate("facebook", {failWithError: true});

export const facebookLoginCallback = (accessToken, refreshToken, profile, cb) =>{
    console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => {
    req.flash("info", "Logged out, see you later");
    req.session.destroy();
    req.logout();
    res.redirect(routes.home);

}
export const page1 = (req, res) => res.render("page1");
export const myPage = (req, res) => res.render("mypage");
export const myLibrary = (req, res) => res.render("mylibrary");

export const bookPage = (req, res) => res.render("bookpage");


export const getIntro = (req, res) => res.render("intro");
export const postIntro = async(req, res) => {

    const {
        body: {bookName}
    } = req;

    const option = {
        query : bookName
    }
    
    let json;

    request.get({
        uri: "https://dapi.kakao.com/v3/search/book?target=title",
        qs: option,
        headers:{
            Authorization: "KakaoAK 78d32ce1cac5c4d2a998590338bef88d"
        }
    }, function(err, callbackRes, body){
        json = JSON.parse(body)
        console.log(json.documents[0].title);
        console.log(json.documents[0].authors);

        let title = json.documents[0].title;
        let authors = json.documents[0].authors;

        try{
            const book = Book.create({
                title: title,
                authors: authors
            })

            console.log(book);

        }catch(error){
            console.log(error);
        }
        res.send(title);

    })

}

export const postBookPage = (req, res) => {

    const {
        body: {bookReview}
    } = req;

    try{        
        const review = Review.create({
            text: bookReview
        })
    
        res.redirect(routes.mylibrary);

    }catch(error){
        console.log(error);
        res.redirect(routes.bookpage);
    }   
}





