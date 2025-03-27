import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  { id: 1, src: '/public/Rectangle 24.png', title: 'Inner Peace', description: '01 — Bed Room' },
  { id: 2, src: '/public/Rectangle 25.png', title: 'Modern Elegance', description: '02 — Living Room' },
  { id: 3, src: '/public/Rectangle 26 (1).png', title: 'Minimal Comfort', description: '03 — Study Room' }
];

export default function ImageCarousel() {
  return (
    <div className='bg-[#f9f5f0]'>
    <div className="w-full max-w-6xl mx-auto py-12 bg-[#f9f5f0] px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900">50+ Beautiful rooms inspiration</h2>
          <p className="text-gray-600 mt-4">Our designer already made a lot of beautiful prototype of rooms that inspire you</p>
          <button className="mt-6 bg-[#b68d40] text-white py-3 px-6 rounded-md font-semibold hover:bg-[#a67c30]">Explore More</button>
        </div>
        <div className="relative">
        <button className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-200">
            ◀
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg z-10 hover:bg-gray-200">
            ▶
          </button>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
            pagination={{ clickable: true }}
            loop
          >
            {images.map((image) => (
              <SwiperSlide key={image.id}>
                <div className="relative">
                  <img src={image.src} alt={image.title} className=" rounded-lg w-[408px] h-[582px] ml-15" />
                  <div className="absolute bottom-5 left-20 bg-white p-4 rounded-md shadow-md">
                    <p className="text-xs text-gray-500 uppercase ">{image.description}</p>
                    <h3 className="text-lg font-semibold text-gray-900">{image.title}</h3>
                    <button className="mt-2 bg-[#b68d40] text-white py-1 px-3 rounded-md font-medium text-sm hover:bg-[#a67c30]">→</button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </div>
  );
}
