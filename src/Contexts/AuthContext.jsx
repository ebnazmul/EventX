import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  signInWithPopup,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContexts = createContext({});

const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [user, setUser] = useState({});
  const [iUpdate, setIUpdate] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setUser(user);
        setLoading(false)
      }else{
        setLoading(false)
      }
    });
  }, [iUpdate]);

  const emailPasswordRegister = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };

  const emailPasswordLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const continueWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const signOutAuth = () => {
    return signOut(auth);
  };

  const value = {
    loading,
    user,
    setUser,
    emailPasswordRegister,
    updateUserProfile,
    emailPasswordLogin,
    continueWithGoogle,
    signOutAuth,
    setIUpdate,
    iUpdate,
  };

  return (
    <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
  );
};

export default AuthContext;
