# Firebase Auth using useContext Hook
A template for using the firebase auth and integrating into Reactjs using usecontext hook.

#### App layout

    ├── public                   # Compiled files (alternatively `dist`)
    ├── src
        ├── App.js               # UserContext wrapped in App.js
        ├── Firebase.js          # Firebase config + export functions of auth, db, signIn
        ├── UserContext.js       # export a userContext
        ├── Home.js              # Home UI - only seen when user is logged in
        ├── Login.js             # Login UI - default page when user is logged out.
        ├── index.js             # Index.js
        . . .
    └── README.md

#### Further Scope
Only available for Google signIn extend to GitHub, Facebook, Email and Password stored in user collection.

####  References
1. [Firebase Auth](https://firebase.google.com/docs/auth/web/start)
2. [ReactJS UseContext](https://react.dev/reference/react/useContext)
3. [Pedro Tech Youtube](https://www.youtube.com/watch?v=vDT7EnUpEoo)

