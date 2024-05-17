// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules'
import slide1 from '../../../src/assets/home/slide1.jpg'
import slide2 from '../../../src/assets/home/slide2.jpg'
import slide3 from '../../../src/assets/home/slide3.jpg'
import slide4 from '../../../src/assets/home/slide4.jpg'
import slide5 from '../../../src/assets/home/slide5.jpg'
import slide6 from '../../../src/assets/home/slide1.jpg'
import slide7 from '../../../src/assets/home/slide1.jpg'
import slide8 from '../../../src/assets/home/slide1.jpg'
import slide9 from '../../../src/assets/home/slide1.jpg'

export default function Order() {
  return (
    <div className='mt-16'>
        <div>
            <h1 className='text-center text-2xl font-normal text-[#D99904] border-b-4 pb-4 w-96 mx-auto mb-4'>---From 11:00am to 10:00pm---</h1>
            <h1 className=' text-4xl font-normal border-b-4 pb-6 mb-12 text-center w-96 mx-auto'>ORDER ONLINE</h1>
        </div>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Salads
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Soups
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>pizzas
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>desserts
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Soups
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Soups
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Soups
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Soups
            </h1>
            </SwiperSlide>
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-2xl uppercase font-normal text-center -mt-12 text-white'>Soups
            </h1>
            </SwiperSlide>
      </Swiper>
    </div>
  )
}
