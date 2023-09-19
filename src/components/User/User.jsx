import { useLoaderData } from "react-router-dom";
import Users from "../Users/Users";
import "./User.css"

const User = () => {
        const user = useLoaderData();
    
    return (
        <div>
           <h3>User Data : {user.length}</h3> 
           <h4>Customar care and True</h4>
           <div className="user-name">
        {
            user.map(users=><Users key={users.id} users={users}></Users>)
        }
           </div>
        </div>
    );
};

export default User;