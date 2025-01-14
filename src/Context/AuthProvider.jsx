import React, { useState } from 'react'
import AuthContext from './AuthContext'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import auth from '../Firebase Config/firebase.config';

function AuthProvider ({children}) {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true)
    const createUser = (email, password) =>{
      setLoading(false);
      createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) =>{
      setLoading(false);
      return signInWithEmailAndPassword(auth, email, password);
    }
    authInfo = {
        user,
        setUser,
        createUser,
        signIn,
        loading
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider