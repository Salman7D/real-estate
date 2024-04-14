import Uses from "../../hooks/Uses";


const UserInformation = () => {

    const {  user, updateUserProfile } = Uses();
    console.log(user);

    const handleSubmit = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const image = e.target.image.value;

        // console.log(name, img);

        updateUserProfile(name, image)
        .then(() => {

        })
    }


    return (
        <div>
        <div>

            <div className="bg-[#F5F7FB] text-center lg:p-3 lg:mb-10">
            <p className="font-medium">Name </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 lg:ml-[745px]">

            </div>
            <p className="font-bold lg:mb-5">{user.displayName}</p>

            <p className="font-medium">Email </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 lg:ml-[745px]">

            </div>
            <p className="font-bold lg:mb-5">{user?.email || "Not Found"}</p>

            <p className="font-medium">PhotoURL </p>
            <div className="bg-[#687389] lg:w-5 lg:h-1 lg:mb-3 lg:ml-[745px]">

            </div>

            <p className="font-bold lg:mb-5">{user.photoURL}</p>
            <div className="lg:ml-[715px]">
            <img src={user.photoURL} alt="" />
            </div>
            
            </div>
            
            
        </div>

<div>
        
<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Full Name</span>
                      </label>
                      <input type="text" placeholder="Full name" className="input input-bordered" name='name' />
                  </div>
                  
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Image Url</span>
                      </label>
                      <input type="text" placeholder="image url" className="input input-bordered" name='image' />
                  </div>
                  
                  <div className="form-control mt-6 p-0">
                      <button className="btn btn-neutral" type='submit'>Register</button>
                  </div>
                  </form>
  </div>
</div>
</div>
    );
};

export default UserInformation;