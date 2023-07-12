// Importing Dependencies
import "./App.css";
import {useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase";
import Home from "./Home";
import Login from "./Login"
import UserContext from "./UserContext";

// App function
function App() {
  
  // user state
  const [user, setUser] = useState(null);
  
  // signout function - to signout the user 
  const handleSignOut = () => {
    signOut(auth);
    setUser(null);
  };

  // useEffect - why user is not present in dependency
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

  return (
    <div>
    // App.j wrapped around context with values user, handleSignout i.e. these values can be used within the wrapped section.
      <UserContext.Provider value={{user,handleSignOut}}>
        {!user && <Login/>}
        {user && <Home/>}
      </UserContext.Provider>
    </div>
  );
}

export default App;
