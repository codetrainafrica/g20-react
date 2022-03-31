import { v4 as uuid } from "uuid";

const initialState = {
  users: [],
  students: [],
  number: 0,
  isLoggedIn: false,
  age: 56,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };

    default:
      return state;
  }
};

export default reducer;
