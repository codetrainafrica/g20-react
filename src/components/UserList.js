import React from "react";
import { connect, useSelector } from "react-redux";
import User from "./User";

//the short way
const UserList = () => {
  const users = useSelector((state) => {
    return state.users;
  });

  return (
    <>
      <h1>User list</h1>
      {users.map((user, index) => {
        return <User user={user} />;
      })}
    </>
  );
};

export default UserList;

//the long way
// const UserList = (props) => {
//   const users = props.users;

//   return (
//     <>
//       <h1>User list</h1>
//       {users.map((user, index) => {
//         return (
//           <div key={`${user.name}-${index}`}>
//             <h1>{user.name}</h1>
//             <h3>{user.age}</h3>
//           </div>
//         );
//       })}
//     </>
//   );
// };

////aka mapStateToProps
// const getDataFromStoreAndPassItAsProps = (state) => {
//   return { users: state.users };
// };

// export default connect(getDataFromStoreAndPassItAsProps)(UserList);
