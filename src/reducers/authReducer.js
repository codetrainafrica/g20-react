const initial_state = {
  userDetails: null,
};

const authReducer = (state = initial_state, action) => {
  switch (action.type) {
    case "SET_USER_DETAILS":
      return { ...state, userDetails: action.payload };

    default:
      return state;
  }
};

export default authReducer;
