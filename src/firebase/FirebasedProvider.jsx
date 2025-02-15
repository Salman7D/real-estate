import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.confiq";
import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

// social auth providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const FirebasedProvider = ({children}) => {

const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true);
console.log(loading);

    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password)
    }

    // update user profile
    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image
        })
    }

    // sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // github login
    const githubLogin =  () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout user
    const logOut = () => {
        setUser(null)
        signOut(auth)
    }

    // observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              
            } 
            setLoading(false)
        });
        return () => unsubscribe();
    },[])


    const allValues = {
        createUser,
        signInUser,
        googleLogin,
        githubLogin,
        logOut,
        user,
        loading,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

FirebasedProvider.propTypes = {
    children:PropTypes.node
}

export default FirebasedProvider;