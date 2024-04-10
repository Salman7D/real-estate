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
            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Art_Gallery.png)] mb-[50px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
                
                </div></SwiperSlide>

            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Convention_Center.png)] mb-[50px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
                
                </div></SwiperSlide>

            <SwiperSlide><div className="text-center rounded-xl bg-no-repeat bg-[url(/src/assets/Images/Hospital.png)] mb-[50px] ml-[110px] w-[1320px] h-[600px] flex items-center justify-center">
                
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