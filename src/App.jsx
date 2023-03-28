import React from "react";
// import { getDatabase, ref, set } from "firebase/database";
import SignupPage from "./pages/Signup";

// const db = getDatabase(app); // this db is instance, interact with database .
const App = () => {
  // const putData = () => {
  //   set(ref(db, "users/tarun"), {
  //     id: 1,
  //     name: "Tarun Mandhan",
  //     age: 34,
  //   });
  // };

  return (
    <>
      <div className="app">
        <h1>Hello Tarun</h1>
        {/* <button onClick={putData}>Put Data</button> */}
        <SignupPage />
      </div>
    </>
  );
};

export default App;
