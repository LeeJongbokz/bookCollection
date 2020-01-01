import express from "express";
import routes from "../routes";
import {home, getJoin, postJoin, getLogin, postLogin, logout, page1} from '../controllers/userControllers';

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin, postLogin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);
globalRouter.get(routes.page1, page1);

globalRouter.get(routes.logout, logout);

export default globalRouter;