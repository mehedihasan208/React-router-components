import { Link } from "react-router-dom";

const Posts = ({pos}) => {
    const {id,title,body} = pos;
    const userStyle = {
        border:'2px solid yellow',
        padding:'4px',
        borderRadius: '5px',
        gap : '10px',

    }
    return (
        <div style={userStyle}>
            <h2>ID : {id}</h2>
            <h3>Title : {title}</h3>
            <Link to={`/posts/${id}`}>Other Info</Link>
        </div>
    );
};

export default Posts;