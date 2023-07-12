import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";

// copy form firebase config console
const firebaseConfig = {
    apiKey: "API-KEY",
    authDomain: "AUTH-DOMAIN",
    projected: "PROJECT-ID",
    storageBucket: "STORAGEBUCKET-ID",
    messagingSenderId: "SENDER-ID",
    appId: "APP-ID",
    measurementId: "MEASUREMENT-ID",
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// provider - for googleSignIn / check firebase auth for GitHub, facebook sign in.
const provider = new GoogleAuthProvider()

// export auth - for knowing status of auth user
export const auth = getAuth(app);

// export handleSignIn function 
export const handleSignIn =  () =>{
    signInWithPopup(auth,provider).then((res)=>{
        console.log(res)
    })
    .catch((err)=>console.log(err))
}

// export db - for CRUD on firebase cloud firestore
export const db=getFirestore();
