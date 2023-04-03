import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "tailwindcss/tailwind.css";
import { EffectCoverflow, Pagination } from "swiper";
import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";
import image5 from "../assets/project5.png";
import image6 from "../assets/project6.png";

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

      <div className="h-full mx-auto bg-transparent" style={{ maxWidth: "100vw" }} >
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
            <img src={image1} className="rounded-lg filter drop-shadow-lg glow" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
            <a href="https://crpto-marketplace-main.vercel.app/" class="text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                Demo
              </a>
              <a href="https://github.com/AbinashSarania/crpto_marketplace_main" class="text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                <code>&lt;code/&gt;</code>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
            <img src={image2} className="rounded-lg filter drop-shadow-lg glow" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
              <a href="https://upwork-omega.vercel.app/" class="text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                Demo
              </a>
              <a href="https://github.com/AbinashSarania/upwork_main" class="text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                <code>&lt;code/&gt;</code>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
            <img src={image3} className="rounded-lg filter drop-shadow-lg glow" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
            <a href="https://63f3b2918f9dfb0ee206d892--cryptoexchange-project.netlify.app/" class=" text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                Demo
              </a>
              <a href="https://github.com/AbinashSarania/crypto_exchange_website-frontend-" class="text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                <code>&lt;code/&gt;</code>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
            <img src={image4} className="rounded-lg filter drop-shadow-lg glow" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
            <a href="https://wiki-search-project.netlify.app/" class=" text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                Demo
              </a>
              
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
            <img src={image5} className="rounded-lg filter drop-shadow-lg glow" alt="" />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end pb-2">
            <a href="https://youtube-clone-abinash.netlify.app/" class=" text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                Demo
              </a>
              <a href="https://github.com/AbinashSarania/project_youtube_clone" class="text-center font-Urbanist bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 text-white font-bold py-2 px-4 rounded mx-2 mb-2">
                <code>&lt;code/&gt;</code>
              </a>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide relative bg-center bg-cover w-72 h-72">
            <img src={image6} className="rounded-lg filter drop-shadow-lg glow" alt="" />
            
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default CardSlider;
