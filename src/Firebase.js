import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider,signInWithPopup} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyDLd8ZWEsQoQJtK815h-jB57OlmoVddHm0",
    authDomain: "vj-collab-859cd.firebaseapp.com",
    projectId: "vj-collab-859cd",
    storageBucket: "vj-collab-859cd.appspot.com",
    messagingSenderId: "261526890320",
    appId: "1:261526890320:web:031226850f5012a6672e55",
    measurementId: "G-GVW5H8H320"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const handleSignIn =  () =>{
    signInWithPopup(auth,provider).then((res)=>{
        console.log(res)
    })
    .catch((err)=>console.log(err))
}


// export db
export const db=getFirestore();

export const auth = getAuth(app);

// authentication
const provider = new GoogleAuthProvider()





