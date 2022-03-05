export const addUserAction = (user) => {
  return {
    type: "ADD_USER",
    payload: user,
  };
};

export const deleteUserAction = (id) => {
  return {
    type: "DELETE_USER",
    payload: id,
  };
};

export const editUserAction = (id, updatedDetails) => {
  return {
    type: "EDIT_USER",
    payload: {
      id,
      updatedDetails,
    },
  };
};

export const changeIsLoggedIn = () => {
  return {
    type: "CHANGE_IS_LOGGED_IN",
  };
};
