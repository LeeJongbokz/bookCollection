import express from "express";

import globalRouter from './routers/globalRouter';
import routes from './routes';
import {localsMiddleware} from './middlewares';

import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

const app = express();
const PORT = 4000

const handleListening = () => console.log('Listening on https://localhost:4000');
const handleHome = (req, res) => res.send('Hello world');

app.set("view engine", "pug");
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(helmet());
app.use(morgan("dev"));

app.use(localsMiddleware);
app.use(routes.home, globalRouter);


app.get('/', handleHome);
app.listen(PORT, handleListening);

export default app;