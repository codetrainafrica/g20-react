import React from "react";
import { connect, useSelector } from "react-redux";

// function UserList(props) {
//   const users = props.users;

//   console.log(props.isLoggedIn);
//   return (
//     <div>
//       {users.map((user, index) => {
//         return (
//           <div key={`${user.name}-${index}`}>
//             <h1>{user.name}</h1>
//             <h2>{user.email}</h2>
//             <h4>{user.gen}</h4>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

//aka mapStateToProps
// const getStateFromStoreAndPassItAsProps = (state) => {
//   return { users: state.users, isLoggedIn: state.isLoggedIn };
// };

// export default connect(getStateFromStoreAndPassItAsProps)(UserList);

function UserList() {
  const users = useSelector((state) => {
    return state.users;
  });

  return (
    <div>
      {users.map((user, index) => {
        return (
          <div key={`${user.name}-${index}`}>
            <h1>{user.name}</h1>
            <h2>{user.email}</h2>
            <h4>{user.gen}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default UserList;
