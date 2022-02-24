const initialState = {
  users: [],
  students: [],
  number: 0,
  isLoggedIn: false,
  age: 56,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
    //add user to users state in the store

    case "EDIT_USER":
    //edit user in users state in store

    case "DELETE_USER":
    //delete users in users state in the store

    default:
      return state;
  }
};

export default reducer;
