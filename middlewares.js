import routes from './routes';

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BookCollection";
    res.locals.routes = routes;
    if(req.isAuthenticated()){
        res.locals.user = req.user || null;
    }
    console.log("hello", res.locals.user);
    next(); 
};