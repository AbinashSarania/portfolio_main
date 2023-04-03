import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";
import { EffectCoverflow, Pagination } from "swiper";

function CardSlider() {
  useEffect(() => {
    // Apply the blur effect to all the slides except the first one when the component is mounted
    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((slide, index) => {
      if (index !== 0) {
        slide.style.filter = "blur(4px)";
      }
    });
  }, []);

  return (
        <div className="mb-8">

          <div className="flex flex-col  items-center justify-between py-2 ">
            <h1 className="font-bold font-Urbanist  items-center tracking-wider cursor-pointer relative" style={{ maxWidth: '60vw', fontSize: 'clamp(2rem, 3vw, 3rem)' }}>
              <span className="text-gradient bg-gradient-to-r from-blue-500 via-blue-300 to-blue-800 bg-clip-text text-transparent">
                My Projects
              </span>



            </h1>
          </div>

          <div className="h-full mx-auto" style={{ maxWidth: "100vw" }}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="swiper pt-20 pb-20"
              speed={1000}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => {
                // Remove the blur effect on the current slide
                const activeSlide = swiper.slides[swiper.activeIndex];
                activeSlide.style.filter = "none";

                // Apply the blur effect to the other slides
                swiper.slides.forEach((slide, index) => {
                  if (index !== swiper.activeIndex) {
                    slide.style.filter = "blur(4px)";
                  }
                });
              }}
            >

              <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
                <img src="https://swiperjs.com/demos/images/nature-1.jpg" className="rounded-lg filter drop-shadow-lg glow" alt=""/>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
                  <button className=" font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Demo
                  </button>
                  <button className=" bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                    <code>&lt;code/&gt;</code>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" className="rounded-lg filter drop-shadow-lg glow" alt=""/>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
                  <button className=" font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Demo
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                    <code>&lt;code/&gt;</code>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" className="rounded-lg filter drop-shadow-lg glow" alt=""/>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
                  <button className="font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Demo
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                    <code>&lt;code/&gt;</code>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" className="rounded-lg filter drop-shadow-lg glow" alt=""/>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
                  <button className="font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Demo
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                    <code>&lt;code/&gt;</code>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" className="rounded-lg filter drop-shadow-lg glow" alt=""/>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
                  <button className="font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Demo
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                    <code>&lt;code/&gt;</code>
                  </button>
                </div>
              </SwiperSlide>

              <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" className="rounded-lg filter drop-shadow-lg glow" alt=""/>
                <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
                  <button className="font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                    Demo
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2">
                    <code>&lt;code/&gt;</code>
                  </button>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
  );
}

export default CardSlider;
