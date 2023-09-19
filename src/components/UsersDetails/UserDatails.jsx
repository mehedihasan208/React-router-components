import { useLoaderData } from "react-router-dom";

const UserDatails = () => {
    const user = useLoaderData();
    const {name,website} = user; 
    
    return (
<div >   
    <h2>Show Details Name : {name} </h2>
    <h3>Website : {website}</h3>
</div>
    );
};

export default UserDatails;