import Post from '../models/Post.js';


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
        
        res.status(200).json({key: post._id});

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

        res.status(200).json({key: comment._id});

    }catch(error){
        console.log(error);
    }

}






