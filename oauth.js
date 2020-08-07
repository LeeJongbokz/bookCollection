import routes from './routes';

var socialLogin = {
    facebook:{
        clientID: process.env.FB_ID,
        clientSecret: process.env.FB_SECRET,
        callbackURL: 'https://www.bookcollection.co.kr/auth/facebook/callback'
    }
}


export default socialLogin;

