// userControllers.js 파일은 
// 유저와 관련된 회원 가입, 로그인, 페이스북 로그인 등과 같은 다양한 기능을
// 구현하기 위한 controller 함수들을 구현함

import passport from "passport";
import routes from "../routes";
// User 모델을 User.js에서 import함
// User 모델을 import하는 이유는 postJoin함수에서 User 객체를 생성할 때, 활용하기 위함임 
import User from "../models/User";
import localStorage from "localStorage";
import { runInNewContext } from "vm";

// home은 routes.home으로 get요청이 들어왔을 때, home.pug를 렌더링하는 기능을 함
export const home = (req, res) => res.render("home");

// getJoin은 routes.join으로 get요청이 들어왔을 때, join.pug를 렌더링하는 기능을 함 
export const getJoin = (req, res) => res.render("join");

// postJoin은 routes.join으로 post요청이 들어왔을 때, 
// 유저가 입력한 email과 password로, 새로운 User 모델을 만드는 역할을 함 
// User 모델을 만들면 register()로 등록을 함
// register메소드는 passport-local-mongoose의 메서드임

// 또한 async-await 패턴을 사용함
// 이 패턴을 사용하는 이유는 User 객체가 register된 후에 다음 로직이 실행되게 하기 위함임
// 자바스크립트는 비동기 방식으로 실행되기 때문에
// async-await 패턴을 사용하지 않으면, User 객체가 register되지 않고 함수가 종료될 수 있음
// 비동기 방식이란 하나의 로직이 요청을 한 후에, 그 요청의 리턴을 기다리지 않고,
// 바로 다음 로직이 실행되는 방식의 프로그래밍을 의미함 
// 따라서 async-await와 같은 비동기 처리 패턴을 사용해야 함 
export const postJoin = async (req, res) => {
    
    // 다음과 같이 req객체의 parameter인 
    // email과 password를 추출할 수 있음
    // 이렇게 해주는 이유는 뒤에서 User 객체를 만들 때, email과 password를 활용해주기 위함임 
    const {
        body: {email, password}
    } = req;

    // try-catch문을 사용함
    // try-catch문을 사용하는 이유는 try문이 에러를 throw했을 시, 
    // try문 내에서의 실행을 중단하고, catch문으로 이동해, 그 에러를 출력하기 위함임 
    // catch절 안에는 try문이 에러를 throw 했을 시, 무엇을 할 지를 명시할 수 있음
    try{        
        // 새로운 유저 객체를 만들어줌
        const user = new User({
            email
        })
        await User.register(user, password);
        user.bookShelfUrl = "hello";
     
        localStorage.setItem('tempbookShelfUrl', user.bookShelfUrl);
    
        // 유저 객체 생성 및 등록이 완료되면, 
        // 클라이언트를 routes.intro로 이동시킴
        res.redirect(routes.intro);
        
        // next()를 사용하는 이유는 postJoin 함수가 미들웨어처럼 기능을 하게 하기 위함임
        // 즉, postJoin함수가 실행되고 바로 postLogin 함수가 실행될 수 있도록 하기 위함임 
        next();

    }catch(error){
            // error를 출력함
            console.log(error);
            // error가 발생했으므로, 다시 클라이언트를 routes.join으로 이동시킴 
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

