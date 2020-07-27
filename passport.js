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
    function(accessToken, refereshToken, profile, cb){
        User.findOrCreate({facebookID: profile.id}, function(err, user){
            return cb(err, user);
        });
    }
    )
);

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findOne({where: { id }})
        .then(user => done(null, user))
        .catch(err => done(err));
});
