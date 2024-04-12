import Uses from "../../hooks/Uses";


const UserInformation = () => {

    const {  user } = Uses();
    return (
        <div>
            
            <p>name: {user.displayName} </p>
            <p>email: {user.email}</p>
            <p>photourl: {user.photoURL}</p>
        </div>
    );
};

export default UserInformation;