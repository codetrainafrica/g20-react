import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { name: "Kofi", email: "kofi@email.com", gen: 19, id: uuid() },
    { name: "Ama", email: "ama@email.com", gen: 20, id: uuid() },
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
      const filteredUsers = state.users.filter((user) => {
        if (user.id !== action.payload) return user;
      });

      return { ...state, users: filteredUsers };

    case "EDIT_USER":
      const users = state.users.map((user) => {
        if (user.id == action.payload.id) return action.payload.updatedDetails;
        return user;
      });

      return { ...state, users };

    case "CHANGE_IS_LOGGED_IN":
      return { ...state, isLoggedIn: !state.isLoggedIn };

    default:
      return state;
  }
};

export default reducer;
