export const addUserAction = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const changeIsLoggedIn = () => {
  return {
    type: "CHANGE_IS_LOGGED_IN",
  };
};
