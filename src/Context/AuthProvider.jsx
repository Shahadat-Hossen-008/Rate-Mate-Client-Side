import React, { useState } from 'react'
import AuthContext from './AuthContext'

function AuthProvider ({children}) {
    const[user, setUser] = useState(null);
    const[loading, setLoading] = useState(true)
    authInfo = {
        user,
        setUser
    }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider