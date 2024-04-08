import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.confiq";

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebasedProvider = ({children}) => {

const [user, setUser] = useState(null)
console.log(user);

    // create user
    const createUser = (email, password) => {
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // github login
    const githubLogin =  () => {
        return signInWithPopup(auth, githubProvider)
    }

    // logout user
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }



    // observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } 
        });
    },[])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebasedProvider;