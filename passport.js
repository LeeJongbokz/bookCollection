import passport from "passport";
import User from "./models/User";
import FacebookStrategy from "passport-facebook";
import {facebookLoginCallback} from "./controllers/userControllers";
import routes from "./routes";
import socialLogin from './oauth';

passport.use(User.createStrategy());

passport.use(new FacebookStrategy(
    {
        clientID: socialLogin.facebook.clientID,
        clientSecret: socialLogin.facebook.clientSecret,
        callbackURL: socialLogin.facebook.callbackURL,
        profileFields: ["id", "displayName", "photos", "email"],
        scope: ["public_profile", "email"]
    },
    facebookLoginCallback
    )
);


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
