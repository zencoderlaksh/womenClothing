import React from 'react';
import IMAGES from '../../../../assets/images/projectImage';
import ModiweekItem from '../../../../components/ModiweekDummy/ModiweekItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


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
    ];

    return (
        <>

            <div className="container mx-auto px-3 w-full sm:px-4 md:max-w-[1250px] " >
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        bulletClass: 'swiper-pagination-bullet bg-blue-600 w-3 h-3 rounded-full mx-1',
                        bulletActiveClass: 'swiper-pagination-bullet-active bg-blue-800',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    className="w-full h-auto py-6 "

                >
                    {ModiweekData.map((item) => (
                        <SwiperSlide key={item.id} className="flex justify-center items-center p-2 sm:max-w-[280px]" style={{ marginRight: "0" }}>
                            <div className="cart w-full sm:max-w-[280px]">
                                <ModiweekItem
                                    id={item.id}
                                    img={item.img}
                                    title={item.title}

                                />
                            </div>
                        </SwiperSlide>
                    ))}
                    <div className="swiper-pagination mt-4 flex justify-center gap-1"></div>
                    <div className="swiper-button-prev text-blue-600 hover:text-blue-800 w-10 h-10 after:text-2xl"></div>
                    <div className="swiper-button-next text-blue-600 hover:text-blue-800 w-10 h-10 after:text-2xl"></div>
                </Swiper>
            </div>
        </>
    );
};

export default ModiweekCart;