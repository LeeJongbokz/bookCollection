import routes from "../routes";


export const home = (req, res) => res.render("Home");
export const getJoin = (req, res) => res.render("Join");
export const postJoin = (req, res) => {
    console.log(req.body);   
    res.render("Join");
}
export const getLogin = (req, res) => res.render("Login");
export const postLogin = (req, res) => {
    res.redirect(routes.home);
}


export const logout = (req, res) => res.render("Logout");
