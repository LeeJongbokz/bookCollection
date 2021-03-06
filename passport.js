import passport from "passport";
import User from "./models/User.js";
import FacebookStrategy from "passport-facebook";
import socialLogin from './oauth.js';
import {
    facebookLoginCallback
} from "./controllers/userControllers.js";

passport.use(User.createStrategy());

passport.use(new FacebookStrategy(
    {
        clientID: socialLogin.facebook.clientID,
        clientSecret: socialLogin.facebook.clientSecret,
        callbackURL: socialLogin.facebook.callbackURL,
        profileFields: ["email"],
        scope: ["public_profile", "email"]
    },
    facebookLoginCallback
));

passport.serializeUser(function(user, done){
    console.log('serializeUser: ' + user.id);
    done(null, user.id);
});
``
passport.deserializeUser(function(id, done){
    User.findById(id, (err, user) => {
        done(null, user);
    });
});    
