import passport from "passport";
import routes from '../routes';
import User from '../models/User';
import Post from '../models/Post';


export const addPost = async(req, res) => {

    const {
        body: {title, contents}
    } = req;

    try{

        const post = await new Post({
            title: title,
            contents: contents,
            writer: req.user
        });
        
        req.user.posts.push(post);

    }catch(error){
        console.log(error);
    }

}


export const removePost = (req, res) =>{

   

}



export const addComment = (req, res) =>{


}


export const removeComment = (req, res) =>{



}






