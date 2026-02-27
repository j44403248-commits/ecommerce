import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

// Images
import team1 from "../../assets/team1.jpg";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import team4 from "../../assets/team4.jpg";
import team2 from "../../assets/team2.jpg";
import team3 from "../../assets/team3.jpg";
import { Link } from "react-router-dom";

const TwoSwipers = () => {
  return (
    <div className="w-full px-8 py-12">
      <div className="flex flex-col md:flex-row gap-2">

        {/* ===== Swiper 1 (Women) ===== */}
        <div className="w-full md:w-1/2 relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            navigation={{
              prevEl: ".prev1",
              nextEl: ".next1",
            }}
            className="h-screen rounded-lg"
          >
            {[team1, img2, img3].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt="women"
                    className="w-full h-full object-cover transform scale-105 opacity-0 animate-slideIn"
                  />

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
                    <p className="text-white text-lg">Shop Women</p>
                    <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
                      New Collection with Mahar
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Icons */}
          <div className="flex justify-center gap-10 mt-4">
            <button className="prev1 text-2xl cursor-pointer">
              <FaChevronLeft />
            </button>
            <button className="next1 text-2xl cursor-pointer">
              <FaChevronRight />
            </button>
          </div>
        </div>

        {/* ===== Swiper 2 (Men) ===== */}
        <div className="w-full md:w-1/2 relative">

          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            speed={800}
            navigation={{
              prevEl: ".prev2",
              nextEl: ".next2",
            }}
            className="h-screen rounded-lg"
          >
            {[team4, team2, team3].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative w-full h-full overflow-hidden rounded-l">
                  <img
                    src={img}
                    alt="men"
                    className="w-full h-full object-cover transform scale-105 opacity-0 animate-slideIn"
                  />

                  {/* Center Text */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-black/30">
                    <p className="text-white text-lg">Shop Men</p>
                    <h2 className="text-white text-3xl md:text-4xl font-bold mt-2">
                      Trending Styles
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Icons */}
          <div className="flex justify-center gap-10 mt-4">
            <button className="prev2 text-2xl cursor-pointer">
              <FaChevronLeft />
            </button>
            <button className="next2 text-2xl cursor-pointer">
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes slideIn {
            0% { opacity: 0; transform: scale(1.1); }
            100% { opacity: 1; transform: scale(1); }
          }
          .animate-slideIn {
            animation: slideIn 0.8s ease forwards;
          }
        `}
      </style>

      
     



    </div>
  );
};

export default TwoSwipers;