import React from "react";
import { useSelector } from "react-redux";
import User from "./User";

function UserList() {
  const users = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
      {users.map((user, index) => {
        return <User key={`${index}-${user.name}`} user={user} />;
      })}
    </div>
  );
}

export default UserList;
