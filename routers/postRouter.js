import express from "express";
import routes from "../routes";

import {getPost, postPost} from '../controllers/postControllers';


const postRouter = global.router();

postRouter.get(routes.post, getPost);
postRouter.post(routes.post, postPost);