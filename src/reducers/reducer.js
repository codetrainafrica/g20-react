const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      //add user to users state in store
      return state;

    case "DELETE_USER":
      //delete user from users state in store
      return state;

    case "EDIT_USER":
      //edit user inside users state in store
      return state;

    default:
      return state;
  }
};

export default reducer;
