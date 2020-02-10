import React from 'react';

const User=({users, deleteUser})=>{
    const UserList=users.map(user=>{
        return (
            <div className="user" key={user.id}>
                <div>Name : {user.name}</div>
                <div>Age : {user.age}</div>
                <div>belt : {user.belt}</div>
                <button onClick={()=>{deleteUser(user.id)}}>Delete me</button>
                <hr/>
            </div>
        )
    });

    return (
        <div className="userList">
            {UserList}
        </div>
    );
}

export default User;