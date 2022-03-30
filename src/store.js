import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { getFirestore, reduxFirestore } from "redux-firestore";
import config from "./firebase/config";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducers";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export const store = createStore(reducers);

// export const store = createStore(
//   usersReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reactReduxFirebase(config),
//     reduxFirestore(config)
//   )
// );
