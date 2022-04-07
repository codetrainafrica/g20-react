import { auth } from "../firebase/config";
import firebase from "firebase";

export const setUserDetails = (userDetails) => {
  return {
    type: "SET_USER_DETAILS",
    payload: userDetails,
  };
};

export const signUpUser = async (email, password, navigate) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);
    navigate("/", { replace: true });
  } catch (error) {
    console.log(error);
  }
};

export const signInUser = async (email, password, navigate) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);
    navigate("/", { replace: true });
  } catch (error) {
    console.log(error);
  }
};

export const signOut = async (navigate) => {
  try {
    await auth.signOut();
    navigate("/login", { replace: true });
  } catch (error) {
    console.log(error);
  }
};

export const signInWithGoogle = async (navigate) => {
  try {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = await auth.signInWithPopup(provider);

    navigate("/", { replace: true });
  } catch (error) {
    console.log(error);
  }
};
