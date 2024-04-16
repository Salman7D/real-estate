import { Helmet } from "react-helmet";


const About = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>About - Skyline Residence</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div data-aos="zoom-down" data-aos-duration="1500" className="bg-[#687389] lg:mt-0 mt-10 mb-10 p-1 rounded-lg text-center lg:p-1 lg:mb-10">
                <h1 className="text-2xl font-black">About</h1>
            </div>
        <div>

        </div>
        <div className="bg-[#caced7] lg:p-5 p-5 mb-10 lg:mb-10">
            <p data-aos="fade-down" data-aos-duration="1500" className="text-xl font-medium">Welcome to Skyline Residence, your premier online destination for all things related to our prestigious residential complex nestled among the clouds.

At Skyline Residence, we pride ourselves on offering unparalleled luxury living with breathtaking views of the cityscape. Our website serves as a virtual gateway, inviting you to explore the sophistication and elegance that define our residence.

Discover the Essence of Elevated Living:

Property Features: Explore the amenities and features that set Skyline Residence apart, from state-of-the-art fitness centers to rooftop gardens.
Floor Plans: Dive into detailed floor plans designed to accommodate various lifestyles and preferences, whether you seek a cozy studio or a spacious penthouse.
Gallery: Immerse yourself in the visual splendor of Skyline Residence through our carefully curated gallery, showcasing stunning interior designs and panoramic vistas.
Neighborhood: Learn more about the vibrant community surrounding Skyline Residence, including nearby dining, entertainment, and cultural attractions.
Resident Resources: Access valuable resources and services exclusively available to Skyline Residence residents, including maintenance requests and community event calendars.
Whether you are considering making Skyline Residence your new home or simply intrigued by the epitome of urban living, our website provides a comprehensive glimpse into the unparalleled lifestyle awaiting you high above the city streets.

Join us as we redefine the skyline and elevate the standard of modern living at Skyline Residence.</p>
        </div>
        </div>
    );
};

export default About;