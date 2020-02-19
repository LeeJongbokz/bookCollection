import passport from "passport";
import User from "./models/User";

import FacebookStrategy from "passport-facebook";
import {facebookLoginCallback} from "./controllers/userControllers";
import routes from "./routes";

passport.use(User.createStrategy());

passport.use(new FacebookStrategy(
    {
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: 'https://www.bookcollection.co.kr/auth/facebook/callback',
        profileFields: ["id", "displayName", "photos", "email"],
        scope: ["public_profile", "email"]
    },
    facebookLoginCallback
    )
);


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
