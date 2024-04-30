
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './Banner.css';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {


    



    return (
        <div>
            <Swiper
                spaceBetween={50}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="slide slide1">
                        <h2 className="absolute inset-x-0 text-xl lg:text-4xl text-center mt-12 text-white font-medium lg:font-bold"> Discover
                        <span className="text-yellow-500 ml-5">T</span>ravel<span className="text-[#34d399]">Trek</span>
                        </h2>
                        <br />

                        <p className='absolute inset-x-0 text-center mt-28 lg:mt-40 text-white font-medium lg:text-3xl'>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={['Simplifying', 'unforgettable', 'adventures']}
                            />
                        </p>
                    </div>
                    
                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide slide2">
                        <h2 className="absolute inset-x-0 text-xl lg:text-4xl text-center mt-12 text-white font-medium lg:font-bold"> Discover
                        <span className="text-yellow-500 ml-5">T</span>ravel<span className="text-[#34d399]">Trek</span>
                        </h2>
                        <br />

                        <p className='absolute inset-x-0 text-center mt-28 lg:mt-40 text-white font-medium lg:text-3xl'>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={['Simplifying', 'unforgettable', 'adventures']}
                            />
                        </p>
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div className="slide slide3">
                        <h2 className="absolute inset-x-0 text-xl lg:text-4xl text-center mt-12 text-white font-medium lg:font-bold"> Discover
                        <span className="text-yellow-500 ml-5">T</span>ravel<span className="text-[#34d399]">Trek</span>
                        </h2>
                        <br />
                        <p className='absolute inset-x-0 text-center mt-28 lg:mt-40 text-white font-medium lg:text-3xl'>
                            <Typewriter
                                loop
                                cursor
                                cursorStyle="_"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                                words={['Simplifying', 'Unforgettable', 'Adventures']}
                            />
                        </p>
                    </div>

                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Banner;
