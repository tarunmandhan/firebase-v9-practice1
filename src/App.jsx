import React from "react";
import { getdatabase } from "firebase/database";
import { app } from "./firebase";


const db = getdatabase(app);  // this db is instance, interact with database . 

const App = () => {
  return (
    <>
      <h1>Hello Tarun</h1>
    </>
  );
};

export default App;
