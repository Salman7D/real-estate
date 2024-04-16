import { Helmet } from "react-helmet";
import c1 from "../../assets/Images/C1.png"
import c2 from "../../assets/Images/C2.png"
import c3 from "../../assets/Images/C3.png"
import c4 from "../../assets/Images/C4.png"

const Agency = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Agency Lists - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="bg-[#aeb7c8] rounded-lg text-center lg:mt-0 mt-10 lg:p-1 lg:mb-10">
                <h1 className="text-2xl font-black">Meet Our Agency</h1>
            </div>
            <div className="lg:grid lg:grid-cols-2  lg:mb-10">
               
               <div data-aos="zoom-down" data-aos-duration="1500" className=" card bg-[#dbdee2] md:ml-48 lg:ml-[200px] mb-10 lg:mb-0 ml-6 lg:mt-1 mt-10 w-96  shadow-xl">
  <figure><img src={c1} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title lg:mb-5">Capital Partners</h2>
    <p className="font-medium">Office: (234) 0200 17813</p>
    <p className="font-medium">Mobile: (657) 9857 12095</p>
    <p className="font-medium">Fax: 809 123 0951</p>
    <p className="font-medium lg:mb-5">Email: info@gmail.com</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost text-white bg-[#687389]">View My Listing</button>
    </div>
  </div>
</div>
                 

<div data-aos="zoom-down" data-aos-duration="1500" className="card lg:ml-[200px] w-96 bg-[#dbdee2] md:ml-48 mb-10 lg:mb-0 ml-6 lg:mt-1 mt-10 shadow-xl">
  <figure><img src={c2} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title lg:mb-5">Capital Partners</h2>
    <p className="font-medium">Office: (234) 0200 17813</p>
    <p className="font-medium">Mobile: (657) 9857 12095</p>
    <p className="font-medium">Fax: 809 123 0951</p>
    <p className="font-medium lg:mb-5">Email: info@gmail.com</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost text-white bg-[#687389]">View My Listing</button>
    </div>
  </div>
</div>
                </div>    


                 <div className="lg:grid lg:grid-cols-2 lg:mb-10">
               
                 <div data-aos="zoom-down" data-aos-duration="1500" className="card lg:ml-[200px] md:ml-48 w-96 mb-10 lg:mb-0 ml-6 lg:mt-1 mt-10 bg-[#dbdee2] shadow-xl">
  <figure><img src={c3} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title ">Capital Partners</h2>
    <p className="font-medium">Office: (234) 0200 17813</p>
    <p className="font-medium">Mobile: (657) 9857 12095</p>
    <p className="font-medium">Fax: 809 123 0951</p>
    <p className="font-medium lg:mb-5">Email: info@gmail.com</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost text-white bg-[#687389]">View My Listing</button>
    </div>
  </div>
</div>
                 

<div data-aos="zoom-down" data-aos-duration="1500" className="card lg:ml-[200px] w-96 bg-[#dbdee2] md:ml-48 mb-10 lg:mb-0 ml-6 lg:mt-1 mt-10 shadow-xl">
  <figure><img src={c4} alt="" /></figure>
  <div className="card-body">
    <h2 className="card-title lg:mb-5">Capital Partners</h2>
    <p className="font-medium">Office: (234) 0200 17813</p>
    <p className="font-medium">Mobile: (657) 9857 12095</p>
    <p className="font-medium">Fax: 809 123 0951</p>
    <p className="font-medium ">Email: info@gmail.com</p>
    <div className="card-actions justify-end">
      <button className="btn btn-ghost text-white bg-[#687389]">View My Listing</button>
    </div>
  </div>
</div>
                </div>                                           
            </div>
       
    );
};

export default Agency;