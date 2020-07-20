import routes from './routes';

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BookCollection";
    res.locals.routes = routes;
    res.locals.isAuthenticated = req.isAuthenticated();
    console.log(req.user);
    next(); 
};

