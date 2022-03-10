import { v4 as uuid } from "uuid";

const initialState = {
  users: [
    { id: uuid(), name: "Kofi", email: "kofi@email.com" },
    { id: uuid(), name: "Kwame", email: "kwame@email.com" },
    { id: uuid(), name: "Mary", email: "kwame@email.com" },
  ],
  students: [],
  number: 0,
  isLoggedIn: false,
  age: 56,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      const users = state.users.map((user) => {
        if (user.id === action.payload.id) return action.payload.newDetails;
        return user;
      });

      return { ...state, users: users };

    case "DELETE_USER":
      const filteredUsers = state.users.filter((user) => {
        if (user.id !== action.payload) return user;
      });

      return { ...state, users: filteredUsers };

    default:
      return state;
  }
};

export default reducer;
