import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

globalRouter.get(routes.home, (req, res) => res.send("Home"));
globalRouter.get(routes.join, (req, res) => res.send("Join"));
globalRouter.get(routes.login, (req,res) => res.send("Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Logout"));

export default globalRouter;