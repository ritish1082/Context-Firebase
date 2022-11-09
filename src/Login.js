import React from 'react'
import {handleSignIn} from "./Firebase"
function Login() {
  return (
    <div>
        <h4>Login</h4>
        <button onClick={handleSignIn}>Sign In</button>
    </div>
  )
}

export default Login