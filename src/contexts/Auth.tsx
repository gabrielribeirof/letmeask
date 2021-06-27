import { createContext, useState, useEffect } from 'react'
import { firebase, auth } from '../services/firebase'

interface User {
  id: string
  name: string
  avatar: string
}

interface AuthContextValue {
  user: User | undefined
  signInWithGoogle(): Promise<void>
}

const AuthContext = createContext({} as AuthContextValue)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>()

  function setUserState(user: firebase.User | null) {
    if (user) {
      const { uid, displayName, photoURL } = user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => user && setUserState(user))

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    try {
      const result = await auth.signInWithPopup(provider)

      setUserState(result.user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
