import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Slider = () => {
    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        >
            <SwiperSlide><div className="text-white text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Art_Gallery.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] flex items-center justify-center">
                <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Experience the pulse of the city at Urban Rhythms Gallery.</p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Through vibrant street art, gritty urban landscapes, and dynamic cityscapes, this gallery reflects the energy and diversity of urban life. From bustling metropolises to hidden alleyways, each artwork tells a story of the human experience in an urban environment.</p>
                </div>
                
                </div></SwiperSlide>

            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Convention_Center.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] flex items-center justify-center">

            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Experience versatility and convenience at the Metroplex Expo Center.</p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Our flexible event spaces and modern amenities cater to a wide range of events, from trade shows and conventions to concerts and community gatherings.</p>
                </div>
                
                </div></SwiperSlide>

            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Hospital.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Welcome to Healing Haven Hospital, where compassionate care meets cutting-edge medicine. </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Our dedicated team of healthcare professionals is committed to providing personalized treatment and support to every patient. From routine check-ups to advanced surgical procedures, trust us to guide you on your journey to wellness.</p>
                </div>
           
                
                </div></SwiperSlide>
            
            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/School.png)] mb-[50px] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Welcome to Academia Prime, where excellence thrives. </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Our elite school campus boasts state-of-the-art facilities, world-class faculty, and a vibrant community dedicated to nurturing the leaders of tomorrow. Join us on a journey of academic discovery and personal growth.</p>
                </div>
           
                
                </div></SwiperSlide>
            
            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Template.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Step into a realm of spiritual transcendence at Divine Sanctuary, the Sacred Temple Complex.  </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Nestled amidst serene surroundings, this hallowed ground is a haven for seekers of inner peace and divine wisdom. From ancient rituals to modern contemplation, immerse yourself in the timeless traditions and profound spirituality of this sacred space.</p>
                </div>
           
                
                </div></SwiperSlide>
           
            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Terminal.png)] lg:mb-[50px] lg:ml-[110px] lg:w-[1320px] lg:h-[600px] flex items-center justify-center">
            <div>
                <p data-aos="fade-left" data-aos-duration="3000" className='mb-6 text-[#FFF] text-5xl font-bold'>Welcome to the Central Transit Nexus ensures that every journey is smooth, efficient, and unforgettable. </p>
                <p data-aos="fade-right" data-aos-duration="3000" className='mb-10 text-[#FFF] text-lg font-normal'>Embark on a journey of seamless travel experiences at the Central Transit Nexus, the beating heart of connectivity. Serving as a pivotal hub for transportation, this dynamic center effortlessly connects travelers to their destinations via a network of trains, buses, and other transit options. With modern amenities, efficient services, and convenient access</p>
                </div>
           
                
                </div></SwiperSlide>

        </Swiper>
        
        // <div>
        //     <div className="text-center bg-no-repeat bg-[url(/src/assets/Images/Art_Gallery.png)] mb-[100px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
                
        //     </div>
        //     <div className="text-center bg-no-repeat bg-[url(/src/assets/Images/Convention_Center.png)] mb-[100px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
                
        //     </div>
        //     <div className="text-center bg-no-repeat bg-[url(/src/assets/Images/Hospital.png)] mb-[100px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
                
        //     </div>
        
        // </div>
    );
};

export default Slider;