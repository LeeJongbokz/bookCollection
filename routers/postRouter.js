import express from "express";
import routes from "../routes.js";

import {getPost, postPost} from '../controllers/postControllers.js';


const postRouter = express.Router();

postRouter.get(routes.post, getPost);
postRouter.post(routes.post, postPost);