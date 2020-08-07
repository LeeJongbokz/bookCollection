import passport from "passport";
import routes from '../routes';
import User from '../models/User';
import Post from '../models/Post';


export const getPost = (req, res) => res.render("post");

export const postPost = async(req, res) => {

    const {
        body: {title, contents}
    } = req;

    try{

        const post = await new Post({
            title: title,
            contents: contents,
            writer: req.user._id
        });
        
        req.user.posts.push(post._id);

    }catch(error){
        console.log(error);
    }

}



export const postComment = async(req, res) =>{

    const {
        body: {contents}
    } = req;
    
    try{

        const comment = await new Comment({
            contents: contents,
            writer: req.user._id
        });

        req.user.comments.push(comment._id);

    }catch(error){
        console.log(error);
    }

}






