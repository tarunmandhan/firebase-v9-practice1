import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password).then((value) =>
      alert("Success")
    );
  };

  const signupWithGoogle = () => {
    signInWithPopup(auth, googleProvider);
  };

  return (
    <>
      <h1>Signup Page</h1>
      <div className="signup-page">
        <label htmlFor="">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          required
          placeholder="Enter your Email here"
        />
        <br />
        <br />

        <label htmlFor="">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          required
          placeholder="Enter your password here"
        />
        <br />
        <br />
        <button onClick={signupWithGoogle}>Signup with Google</button>
        <button onClick={createUser}>Sign up</button>
      </div>
    </>
  );
};
export default SignupPage;
