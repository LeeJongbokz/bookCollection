import passport from "passport";
import routes from "../routes";
import User from "../models/User";
import { runInNewContext } from "vm";


export const home = (req, res) => res.render("Home");
export const getJoin = (req, res) => res.render("Join");
export const postJoin = async (req, res) => {
    const {
        body: { email, password, age}
    } = req;

    try{        
        const user = new User({
            email,
            password,
            age
        });
        await User.register(user, password);
        }catch(error){
            console.log(error);
            res.redirect(routes.home);
        }
}



export const getLogin = (req, res) => res.render("login");
export const postLogin = (req, res) => passport.authenticate('local', {
    failureRedirect: routes.login,
    succcesRedirect: routes.page1
}); 


export const logout = (req, res) => res.render("Logout");
export const page1 = (req, res) => res.render("Page1");

