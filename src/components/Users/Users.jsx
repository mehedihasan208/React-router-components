/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Users = ({users}) => {
    const {name,phone,email,id}=users;
    const userStyle = {
        border:'2px solid red',
        padding:'4px',
        borderRadius: '5px'

    }
    return (
        <div style={userStyle}>
            <h2>{name}</h2>
            <h3>{phone}</h3>
            <h5>{email}</h5>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default Users;