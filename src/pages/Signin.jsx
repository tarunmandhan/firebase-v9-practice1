import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinUser = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => console.log("Signin successfull"))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="signin-page">
        <h1>Signin Page</h1>
        <label>Enter your Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="Email"
          placeholder="Enter your Email here"
        ></input>
        <br />
        <br />
        <label>Enter your Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          placeholder="Enter your Password here"
        ></input>
        <br />
        <br />
        <button onClick={signinUser}>Sign in</button>
      </div>
    </>
  );
};
export default SigninPage;
