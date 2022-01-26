import React from "react";
import Item from "./Item";

const UserList = (props) => {
  return (
    <div>
      <h1>List of users</h1>
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

// class UserList extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>List of users</h1>
//         {this.props.users.map((user, index) => {
//           return (
//             <div key={index}>
//               <h3>{user.name}</h3>
//               <h4>{user.email}</h4>
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default UserList;
