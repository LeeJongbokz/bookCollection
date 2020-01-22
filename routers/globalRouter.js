import express from "express";
import routes from "../routes";
import {home, getJoin, postJoin, getLogin, postLogin, logout, intro, page1} from '../controllers/userControllers';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.intro, intro);
globalRouter.get(routes.page1, page1);


export default globalRouter;