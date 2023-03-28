import React from "react";
// import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// const db = getDatabase(app); // this db is instance, interact with database .
const auth = getAuth(app);
const App = () => {
  // const putData = () => {
  //   set(ref(db, "users/tarun"), {
  //     id: 1,
  //     name: "Tarun Mandhan",
  //     age: 34,
  //   });
  // };

  const signupUser = () => {
    createUserWithEmailAndPassword(auth, "tarun5@gmail.com", "tarun@5").then(
      (value) => console.log(value)
    );
  };
  return (
    <>
      <h1>Hello Tarun</h1>
      {/* <button onClick={putData}>Put Data</button> */}
      <button onClick={signupUser}>Sign up</button>
    </>
  );
};

export default App;
