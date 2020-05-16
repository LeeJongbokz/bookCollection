// userControllers.js 파일은 
// 클라이언트의 회원 가입, 로그인, 페이스북 로그인 등과 같은 다양한 기능을 구현함

import passport from "passport";
import routes from "../routes";

// User 모델을 User.js에서 import해서, 
// postJoin함수에서 User 객체를 생성할 때, 활용함
import User from "../models/User";
import localStorage from "localStorage";
import { runInNewContext } from "vm";

// home은 routes.home으로 get요청이 들어왔을 때, home.pug를 렌더링함
export const home = (req, res) => res.render("home");

// getJoin은 routes.join으로 get요청이 들어왔을 때, join.pug를 렌더링함 
export const getJoin = (req, res) => res.render("join");

// postJoin은 클라이언트로부터 routes.join으로 post요청이 들어왔을 때, 
// 유저가 입력한 email과 password로, 새 User 객체를 만듦 
// 새 User 객체는 register()로 등록을 함
// register()는 새로운 객체를 MongoDB에 등록하기 위한 메소드임 

// 또한 async-await 패턴을 사용함
// 이는 User 객체가 MongoDB에 등록되고 나서야만, 다음 로직이 실행되게 하기 위함임
// async-await 패턴을 사용하지 않으면, User 객체가 register되지 않고 함수가 종료될 수 있음

// postJoin 함수를 export함
// export하는 globalRouter.js파일에서 import해서, 콜백함수로 활용하기 위함임 
export const postJoin = async (req, res) => {
    
    // req객체의 parameter인 email과 password를 추출함
    // 이는 User 객체를 만들 때, email과 password를 활용해주기 위함임 
    const {
        body: {email, password}
    } = req;

    // try-catch문을 사용함
    // try-catch문을 사용한 이유는 try문 내에서 에러 발생시 코드 실행을 중단시키고 catch문으로 이동시키는 것이 목적임 
    try{        
        // 새 유저 객체를 만들어줌
        const user = new User({
            email
        })
        
        // await문을 사용해서 User를 MongoDB에 등록함 
        await User.register(user, password);
        user.bookShelfUrl = "hello";
     
        localStorage.setItem('tempbookShelfUrl', user.bookShelfUrl);
    
        // 유저 객체 생성 및 등록이 완료되면 클라이언트를 routes.intro로 강제로 이동시킴
        res.redirect(routes.intro);
        
        // next()를 사용하는 이유는 postJoin 함수가 미들웨어처럼 기능을 하게 하기 위함임
        // 즉, postJoin함수가 실행되고 바로 postLogin 함수가 실행되게 하는 것이 목적임 
        // 이는 클라이언트의 회원가입과 동시에 로그인을 가능하게 하는 것을 의미함 
        next();

    }catch(error){
            // error를 출력함
            console.log(error);
            // error가 발생했으므로 다시 클라이언트를 routes.join으로 강제로 이동시킴 
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

