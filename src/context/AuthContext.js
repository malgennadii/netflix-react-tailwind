import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import {  
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';

const AuthContext = createContext()

export  function AuthContextProvaider({children}) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth)
  }
  useEffect(() => {
    const unsubscrible = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
    })
    return () => {
      unsubscrible()
    }
  })

  return (
    <AuthContext.Provider value={{signUp, logIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  )
}

export function UserAuth(){
  return useContext(AuthContext)
}