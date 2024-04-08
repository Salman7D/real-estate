import Uses from "../hooks/Uses";


const SocialLogin = () => {

    const { googleLogin, githubLogin } = Uses();
    return (
        <>
            <div className="divider lg:w-1/2 lg:ml-[400px]">
                Continue with
            </div>
            <div className="flex justify-center lg:gap-32">
            <button onClick={() => googleLogin()} className="btn btn-primary">Google</button>
            <button onClick={() => githubLogin()} className="btn btn-secondary">Github</button>
            </div>
        </>
        
    );
};

export default SocialLogin;