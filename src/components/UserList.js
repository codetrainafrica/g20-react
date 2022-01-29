import React from "react";
import User from "./User";

const UserList = (props) => {
  return (
    <div>
      {/* map through the users state array and display each user in the User component */}
      {props.users.map((user, index) => {
        return (
          <User
            key={index}
            user={user}
            deleteUser={props.deleteUser}
            editUser={props.editUser}
          />
        );
      })}
    </div>
  );
};

export default UserList;
