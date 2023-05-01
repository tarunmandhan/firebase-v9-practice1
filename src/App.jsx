import { React, useEffect, useState } from "react";
// import { getDatabase, ref, set } from "firebase/database";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { app } from "./firebase";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";

const auth = getAuth(app);

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // user logged out
        console.log("You are Sign Out");
        setUser(null);
      }
    });
  }, []);
  if (user === null) {
    return (
      <div className="app">
        <SignupPage />
        <SigninPage />
      </div>
    );
  }

  return (
    <>
      <div className="app">
        <h1>Hello {user.email}</h1>
        <br />
        <button onClick={() => signOut(auth)}>Sign Out</button>
      </div>
    </>
  );
};

export default App;
