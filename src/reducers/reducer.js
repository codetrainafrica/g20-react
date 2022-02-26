const initialState = {
  users: [
    { name: "Kofi", email: "kofi@email.com", gen: 19 },
    { name: "Ama", email: "ama@email.com", gen: 20 },
  ],
  students: [],
  number: 0,
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "DELETE_USER":
      //delete user from users state in store
      return state;

    case "EDIT_USER":
      //edit user inside users state in store
      return state;

    case "CHANGE_IS_LOGGED_IN":
      return { ...state, isLoggedIn: !state.isLoggedIn };

    default:
      return state;
  }
};

export default reducer;
