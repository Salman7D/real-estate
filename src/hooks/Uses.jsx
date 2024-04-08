import { useContext } from "react";
import { AuthContext } from "../firebase/FirebasedProvider";


const Uses = () => {
    const all = useContext(AuthContext)
    return all;

};

export default Uses;