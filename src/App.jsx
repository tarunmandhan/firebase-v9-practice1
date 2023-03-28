import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "./firebase";

const db = getDatabase(app); // this db is instance, interact with database .

const App = () => {
  const putData = () => {
    set(ref(db, "users/tarun"), {
      id: 1,
      name: "Tarun",
      age: 34,
    });
  };
  return (
    <>
      <h1>Hello Tarun</h1>
      <button onClick={putData}>Put Data</button>
    </>
  );
};

export default App;
