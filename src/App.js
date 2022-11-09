import "./App.css";
import {useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase";
import Home from "./Home";
import Login from "./Login"
import UserContext from "./UserContext";

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsub;
  }, []);

  const handleSignOut = () => {
    signOut(auth);
    setUser(null);
  };

  return (
    <div>
      <UserContext.Provider value={{user,handleSignOut}}>
        {!user && <Login/>}
        {user && <Home/>}
      </UserContext.Provider>
    </div>
  );
}

export default App;