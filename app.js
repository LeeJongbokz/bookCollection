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

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
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