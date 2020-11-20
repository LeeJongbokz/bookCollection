import routes from './routes.js'

export const localsMiddleware = (req, res, next) => {
    res.locals.siteName = "BookCollection";
    res.locals.routes = routes;
    res.locals.loggedUser = req.user || null;
    console.log("User is authenticated: " + req.user);
    console.log("Authenticated?:" + req.isAuthenticated());
    next(); 
};

export const onlyPublic = (req, res, next) => {
    if(req.user){
        res.redirect(routes.home);
    }else{
        next();
    }
}
