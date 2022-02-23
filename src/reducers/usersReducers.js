const initialState = {
  users: [
    { name: "John", email: "john@email.com", gen: 1 },
    { name: "Kofi", email: "kofu@email.com", gen: 2 },
  ],

  students: [],
  number: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, users: [...state.users, action.payload] };

    case "EDIT_USER":
      return state;

    case "DELETE_USER":
      return state;

    default:
      return state;
  }
};

export default usersReducer;
