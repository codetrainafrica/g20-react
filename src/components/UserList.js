import React from "react";

const UserList = (props) => {
  return (
    <div>
      {/* loops through the users array and displays a div containing each users' name and email */}
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
