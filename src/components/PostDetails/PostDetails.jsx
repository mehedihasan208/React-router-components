import { useLoaderData } from "react-router-dom";
import Posts from "../Posts/Posts";

const PostDetails = () => {
    const post = useLoaderData();
    // const {title} = post
    return (
        <div>
            <h4>Post : {post.length}</h4>
            <div  className="user-name">
            {
                post.map(pos=><Posts key={pos.id} pos={pos}></Posts>)
            }
            </div>
        </div>
    );
};

export default PostDetails;