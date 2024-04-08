import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import auth from "./firebase.confiq";

export const AuthContext = createContext(null);

const FirebasedProvider = ({children}) => {


    // create user
    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }
    const allValues = {
        createUser
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebasedProvider;