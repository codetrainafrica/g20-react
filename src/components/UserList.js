import React from "react";

const UserList = (props) => {
  return (
    <div>
      <h1>List of Users</h1>
      {/* loop through the users array and display each user's name and email */}
      {props.users.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h3>{user.email}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
