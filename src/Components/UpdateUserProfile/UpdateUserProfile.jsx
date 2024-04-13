import { useState } from "react";
import Uses from "../../hooks/Uses";


const UpdateUserProfile = () => {

    const {user}= Uses();
    console.log(user);

    const [displayName, setDisplayName] = useState("");
    const [photoURL, setPhotoURL] = useState("");

    const handleUpdateProfile = async () => {
        const goal = user.currentUser;
        console.log(user);
        console.log(goal);

        try{
            await goal.updateProfile({
                displayName: displayName,
                photoURL: photoURL
            });
            console.log("Success");
        }
        catch(error){
            console.error(error.message);
        }
    };
    return (
        <div>
      <input
        type="text"
        placeholder="Name"
        value={displayName}
        onChange={(e) => setDisplayName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Photo URL"
        value={photoURL}
        onChange={(e) => setPhotoURL(e.target.value)}
      />
      <button onClick={handleUpdateProfile}>Save Changes</button>
    </div>
    );
};

export default UpdateUserProfile;