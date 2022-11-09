import {React,useContext} from 'react'
import UserContext from "./UserContext"
function Home() {
  const {user,handleSignOut} = useContext(UserContext);
  return (
    <div>
        <div>Home</div>
        <div>{user?.displayName}</div>
        <button onClick={handleSignOut}>Logout</button>
    </div>
  )
}

export default Home