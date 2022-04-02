import { createStore, combineReducers } from "redux";
import config from "./firebase/config";
import thunk from "redux-thunk";
import usersReducer from "./reducers/usersReducers";
import authReducer from "./reducers/authReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: "usersReducer",
};

const reducers = combineReducers({
  usersReducer: usersReducer,
  authReducer: authReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
