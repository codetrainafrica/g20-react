const initialState = {
  users: [],
  isLoggedIn: false,
  number: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return state;

    case "EDIT_USER":
      return state;

    case "DELETE_USER":
      return state;

    default:
      return state;
  }
};

export default usersReducer;
