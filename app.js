import express from "express";
import globalRouter from './routers/globalRouter';
import routes from './routes';
import MongoStore from "connect-mongo";
import {localsMiddleware} from './middlewares';

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import path from "path";

import "./passport";

// app이라는 이름의 express 객체를 선언해줌
// Express는 노드의 웹 프레임웍임 
const app = express();

const CookieStore = MongoStore(session);

// helmet이라는 패키지를 미들웨어로 사용함
// helmet은 다양한 HTTP헤더를 세팅함으로써 express앱의 보안에 도움이 됨 
// app.use()는 express앱이 미들웨어 스택을 사용하는데 필요함 
app.use(helmet());

// pug라는 템플릿 엔진을 사용함
// Express가 템플릿을 렌더링하려면 다음과 같이 앱을 설정 해야함
app.set("view engine", "pug");

// express.static은 이미지, CSS, Javascript 파일과 같은 정적 파일을 사용하기 위해서 선언됨
// express.static은 미들웨어 함수임
// 아래 코드는 'public'이라는 이름의 폴더에서 정적 파일들을 가져오라는 내용임
app.use(express.static(path.join(__dirname, "public")));



app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(morgan("dev"));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({mongooseConnection: mongoose.connection})
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
app.use(routes.home, globalRouter);


export default app;
