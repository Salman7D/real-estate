import { createContext } from "react";

const AuthContext = createContext(null);

const FirebaseProvider = () => {

    const allValues = {
        name: "ss"
    }
    return (
        <AuthContext.Provider value={allValues}>

        </AuthContext.Provider>
    );
};

export default FirebaseProvider;