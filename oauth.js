import routes from './routes';


var socialLogin = {
    facebook:{
        clientID: "517541762243918",
        clientSecret: "682edc9571d85a2a7cfb9146625dedfb",
        callbackURL: 'https://www.bookcollection.co.kr/${routes.facebookCallback}'
    }
}


export default socialLogin;

