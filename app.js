import express from "express";
import globalRouter from './routers/globalRouter';
import routes from './routes';
import {localsMiddleware} from './middlewares';

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";
import passport from "passport";
import session from "express-session";
import path from "path";

import "./passport";

const app = express();

const handleHome = (req, res) => res.send('Hello world');

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(localsMiddleware);
app.use(routes.home, globalRouter);

app.get('/', handleHome);

export default app;