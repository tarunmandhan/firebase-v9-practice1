import { React, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "./firebase";
import SignupPage from "./pages/Signup";
import SigninPage from "./pages/Signin";

const auth = getAuth(app);
const firestore = getFirestore(app);

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

  const writeData = async () => {
    const result = await addDoc(collection(firestore, "cities"), {
      name: "delhi",
      pincode: 110011,
      lat: 12345,
      long: 6789,
    });
    console.log("Result", result);
  };

  const makeSubCollection = async () => {
    await addDoc(collection(firestore, "cities/Tklpt9r2MLKwKEDcCULX/places2"), {
      name: "patel",
      destrict: "karolbagh",
      date: Date.now(),
    });
  };

  return (
    <>
      <div className="app">
        <h1>Hello {user.email}</h1>
        <br />
        <button onClick={() => signOut(auth)}>Sign Out</button>
        <br />
        <br />
        <h1>firebase Firestore</h1>
        <button onClick={writeData}>Add Data</button>
        <button onClick={makeSubCollection}>Add sub Data</button>
      </div>
    </>
  );
};

export default App;
