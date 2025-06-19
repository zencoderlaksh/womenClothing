import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Navigation, Autoplay } from 'swiper/modules'; // Added Autoplay module
import IMAGES from '../../../../assets/images/projectImage';
import ModiweekItem from '../../../../components/ModiweekDummy/ModiweekItem';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ModiweekCart = () => {
    const ModiweekData = [
        {
            id: 1,
            img: IMAGES.ModiweekOne,
            title: 'Sunday',
        },
        {
            id: 2,
            img: IMAGES.ModiweekTwo,
            title: 'Monday',
        },
        {
            id: 3,
            img: IMAGES.ModiweekThree,
            title: 'Tuesday',
        },
        {
            id: 4,
            img: IMAGES.ModiweekFour,
            title: 'Wednesday',
        },
        {
            id: 3,
            img: IMAGES.ModiweekThree,
            title: 'Tuesday',
        },
        {
            id: 4,
            img: IMAGES.ModiweekFour,
            title: 'Wednesday',
        },
    ];

    return (
        <div className="container mx-auto px-3 w-full sm:px-4 md:max-w-[1250px] py-5">
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{
                    delay: 2500, // 2.5 seconds delay between slides
                    disableOnInteraction: false, // Continue autoplay after user interaction
                }}
                keyboard={{ enabled: true }}
                pagination={{
                    clickable: true,
                    el: '.modiweek-pagination',
                    bulletClass: 'swiper-pagination-bullet',
                    bulletActiveClass: 'swiper-pagination-bullet-active'
                }}
                navigation={{
                    nextEl: '.modiweek-button-next',
                    prevEl: '.modiweek-button-prev',
                }}
                modules={[Keyboard, Pagination, Navigation, Autoplay]} // Added Autoplay module
                className="relative"
                breakpoints={{
                    640: { slidesPerView: 2, spaceBetween: 20 },
                    768: { slidesPerView: 3, spaceBetween: 25 },
                    1024: { slidesPerView: 4, spaceBetween: 30 },
                }}
            >
                {ModiweekData.map((item) => (
                    <SwiperSlide key={item.id} className="flex justify-center">
                        <div className="w-full max-w-[280px]">
                            <ModiweekItem
                                id={item.id}
                                img={item.img}
                                title={item.title}
                            />
                        </div>
                    </SwiperSlide>
                ))}

                {/* Custom Navigation Buttons */}
                <div className="modiweek-button-prev absolute top-1/2 left-0 z-10 -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </div>
                <div className="modiweek-button-next absolute top-1/2 right-0 z-10 -translate-y-1/2 cursor-pointer bg-white/80 hover:bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                
                <div className="modiweek-pagination flex justify-center mt-6 space-x-2" />
            </Swiper>

           
            <style jsx global>{`
                .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                    background-color: #d1d5db;
                    opacity: 1;
                }
                .swiper-pagination-bullet-active {
                    background-color: #000;
                }
            `}</style>
        </div>
    );
};

export default ModiweekCart;