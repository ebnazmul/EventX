import { createContext } from "react";
import auth from "../firebase/firebase.config";
import { signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";


export const AuthContexts = createContext({})


const googleProvider = new GoogleAuthProvider();

// eslint-disable-next-line react/prop-types
const AuthContext = ({children}) => {


    const emailPasswordRegister = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const emailPasswordLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    const continueWithGoogle = () => {
       return signInWithPopup(auth, googleProvider);
    }

    const value = {
        emailPasswordRegister,
        emailPasswordLogin,
        continueWithGoogle
    }

    return (
        <AuthContexts.Provider value={value}>{children}</AuthContexts.Provider>
    );
};

export default AuthContext;