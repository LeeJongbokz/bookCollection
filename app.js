import express from "express";
import globalRouter from './routers/globalRouter.js';
import routes from './routes.js';
import MongoStore from "connect-mongo";
import {localsMiddleware} from './middlewares.js';

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import flash from "express-flash";

import "./passport.js";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());

app.set("view engine", "pug");

app.use(express.static('public'));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use(morgan("dev"));
app.use(session({
    secret: "^Ep?Y$`K/oe2YuQ1cb",
    resave: true,
    saveUninitialized: true,
    store: new CookieStore({mongooseConnection: mongoose.connection})
    })
);

app.use(flash());

app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
app.use(routes.home, globalRouter);

export default app;
