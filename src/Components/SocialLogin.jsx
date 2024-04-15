import { toast } from "react-toastify";
import Uses from "../hooks/Uses";
import { useNavigate, useLocation } from "react-router-dom";


const SocialLogin = () => {

    const { googleLogin, githubLogin } = Uses();

    // navigation system
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || "/";

    const handleSocialLogin = socialprovider => {
        socialprovider()
        .then(result => {
            if(result.user){
                toast.success("Success");
                navigate(from);
                
            }
        })
    }
    return (
        <>
            <div className="divider lg:w-1/2 lg:ml-[400px] font-bold">
                Continue with
            </div>
            <div className="flex justify-center lg:gap-32">
            <button onClick={() => handleSocialLogin(googleLogin)} className="btn btn-ghost border-primary text-primary">Google</button>
            <button onClick={() => handleSocialLogin(githubLogin)} className="btn btn-ghost border-secondary text-secondary">Github</button>
            </div>
        </>
        
    );
};

export default SocialLogin;