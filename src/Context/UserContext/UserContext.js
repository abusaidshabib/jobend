import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UserContext = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, 
      currentUser => {
        setUser(currentUser);
        setLoading(false);
      })
  })

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  }

  const verify = () => {
    return sendEmailVerification(auth.currentUser)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  }

  const allInfo = {
    createUser, updateUser, verify, user, logIn, logOut
  };

  return (
    <div>
      <AuthContext.Provider value={allInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
};

export default UserContext;