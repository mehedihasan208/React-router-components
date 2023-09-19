import { useLoaderData } from "react-router-dom";

const PostInfo = () => {
    const posts = useLoaderData();
    console.log(posts)
    const {id,title,body} = posts;
    return (
        <div>
            <h2>Id : {id}</h2>
            <h3> Title ; {title}</h3>
            <h6>Body : {body}</h6>
        
        </div>
    );
};

export default PostInfo;