import { Helmet } from "react-helmet";


const ContactUS = () => {
    return (

        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Us - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div data-aos="zoom-down" data-aos-duration="1500" className="bg-[#687389] lg:mt-0 mt-10 rounded-lg text-center mb-10 p-1 lg:p-1 lg:mb-10">
                <h1 className="text-2xl font-black">Contuct Us</h1>
            </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:ml-52 lg:mr-52">
            <div>
            <div data-aos="fade-left" data-aos-duration="1500" className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#ccd4e4] lg:mb-10 md:ml-48 lg:ml-10 ml-5  mb-10">
           <form className="card-body lg:w-[390px]">
                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">First Name</span>
                      </label>
                      <input type="text" placeholder="First Name" className="input input-bordered" name='name' />
                  </div>

                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Last Name</span>
                      </label>
                      <input type="text" placeholder="Last Name" className="input input-bordered" name='name' />
                  </div>

                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Email</span>
                      </label>
                      <input type="text" placeholder="Email" className="input input-bordered" name='name' />
                  </div>

                  <div className="form-control">
                      <label className="label">
                          <span className="label-text">Message</span>
                      </label>
                      <input type="message" placeholder="Message" className="input input-bordered lg:h-[100px]" name='name' />
                  </div>
                  
                  
                  
                  <div className="form-control mt-6 p-0">
                      <button className="btn btn-ghost bg-[#687389] text-white" type='submit'>Submit</button>
                  </div>
                  </form>
                  </div>
            </div>

            <div>
                <div data-aos="fade-right" data-aos-duration="1500" className="bg-[#dce2ed] rounded-xl p-5 lg:p-5">
                    <h2 className="text-xl font-bold lg:mb-2">Contact Details</h2>
                    <div className="bg-[#aeb9cf] lg:w-16 lg:h-1 lg:mb-5">
                        
                    </div>
                    <p className="font-medium">Please find below contact details and contact us today!</p>
                    <p className="font-medium">95 South Park Ave, USA</p>
                    <p className="font-medium">+456 875 369 208</p>
                    <p className="font-medium">support@findhouses.com</p>
                    <p className="font-medium">8:00 a.m - 9:00 p.m</p>
                </div>
            </div>
            
        </div>
        </div>
    );
};

export default ContactUS;