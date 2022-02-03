import React from "react";
import Item from "./Item";

const UserList = (props) => {
  return (
    <div>
      <h1>List of Users</h1>
      {/* loop through the users array and display each user's name and email */}
      {props.users.map((user, index) => {
        return (
          <Item
            key={index}
            user={user}
            editUser={props.editUser}
            deleteUser={props.deleteUser}
          />
        );
      })}
    </div>
  );
};

export default UserList;
