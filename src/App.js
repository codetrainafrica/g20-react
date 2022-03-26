import { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import firebase from "./firebase/config";
import { setUsers } from "./actions/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    firebase
      .firestore()
      .collection("users")
      .onSnapshot((users) => {
        let data = [];

        users.forEach((user) => {
          data.push(user.data());
        });

        dispatch(setUsers(data));
      });
  }, []);

  return (
    <div className="App">
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
