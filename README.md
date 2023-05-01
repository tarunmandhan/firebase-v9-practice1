1. import initializeApp
2. const firebaseConfig{ copy & paste here firebase A/c Config details }
3. const app=initializeApp(firebaseConfig);
4. export initializeApp; or export const app = initializeApp(firebaseConfig);

# check connection is done by input in database of firebase A/c

1. copy & paste databaseURL:"paste here url", from realtime database to firebaseConfig{here}
2. import {getdatabase} from "firebase/database"; && import {app} from "./firebase"; ::-- in App.jsx
3. Now create database instence const db=getdatabase(app);
4. this db is instance, interact with firebase realtime database .
5. Now create method to put data into firebase realtime database. ::--in App.jsx
   const putData = () =>{
   set(ref(db,"users/tarun" ), {
   id:1,
   name:Tarun,
   age:34,
   }) // use set & pass set first parameter ref then ref first parameter is db then second parameter is name of the root (jisme hame data dalna h) ,Now pass second parameter of set is the actual data you want to put.
   }
6. create button and use onClick event calling to putdata
   <button onClick={putData}>Put Data</button>
7. click on button then check in firebase realtime database data is insert or not.

# Now how to enable Authentication Signup with firebase

1. Enable email/Password services in firebase authentication options.
2. import {getAuth} from "firebase/auth";
   import {app} from "../firebase";
   2.1 const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
3. create intance of auth.
   const auth = getauth(app);
4. import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
5. first step to create signup process ::-- call getAuth() method then
   second step ::-- call a firebase function - createUserWithEmailAndPassword(with three parameters)
   createUserWithEmailAndPassword(auth, email, password)
6. create button and use onClick event calling to putdata.
   <button onClick={signupUser}>Sign up</button>
7. click on button then check in firebase Authentication options user data created or not.
8. create separate component Signup.jsx for create user.

# Now how to enable Authentication Signin with firebase

1. import { getAuth } from "firebase/auth";
   import {app} from "../firebase";
   1.1 const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
2. create intance of auth.
   const auth = getauth(app);
3. import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
4. first step to create signin process ::-- call getAuth() method then
   second step ::-- call a firebase function - signInWithEmailAndPassword(with three parameters)
   createUserWithEmailAndPassword(auth, email, password)
5. create button and use onClick event calling to putdata.
   <button onClick={signinUser}>Sign up</button>

# Now how to signup with Google account directly

1. create button name:- signup with Google
2. import GoogleAuthProvider
   import { GoogleAuthProvider } from "firebase/auth";
3. Create intance of GoogleAuthProvider
   const googleProvider = new GoogleAuthProvider();
4. import SignInWithPopup
   import { SignInWithPopup } from "firebase/auth";
5. create function
   const signupWithGoogle = () => {
   signInWithPopup(auth, googleProvider);
   };
6. Add onClick event
   onClick={signupWithGoogle}

# Now how to detect current user login

1. import { getAuth, onAuthStateChanged } from "firebase/auth";
2. const [user, setUser] = useState(null);

useEffect(() => {
onAuthStateChanged(auth, (user) => {
if (user) {
setUser(user);
} else {
// user logged out
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
</div>
</>
);
};

# Now SignOut button

1. import signOut
2. <button onClick={() => signOut(auth)}>Sign Out</button>

# Now
