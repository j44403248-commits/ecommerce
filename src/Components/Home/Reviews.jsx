import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaStar, FaCheckCircle } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";

const reviews = [
  {
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    text: "I can't tell you... I've been looking for it for a long time but can't find this type of inner.",
    name: "Tayyaba Nisa",
    product: "Tank Top - Black",
    rating: 5,
  },
  {
    img: "", // no image
    text: "Really nice quality. Absolutely worth it and would recommend it.",
    name: "Mrs. Faryal Khizer",
    product: "Round Neck Ribbed Top",
    rating: 5,
  },
  {
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "Want to change the article please send me the large size.",
    name: "Arfa Malik",
    product: "Raglan Graphic Tee - White",
    rating: 5,
  },
  {
    img: "", // no image
    text: "Quality stuff, good design. Worth it, and thanks.",
    name: "Maheen Tasawur",
    product: "Raglan Stripe Tee - Black",
    rating: 4,
  },
];

const Reviews = () => {
  return (
    <div className="w-full py-12 bg-[#f6f6f6]">
      <h2 className="text-center text-xl font-semibold mb-8">
        YOU MAKE US LOVE WHAT WE DO!
      </h2>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={3}
        className="max-w-6xl mx-auto px-10"
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="text-center bg-white p-4 rounded-lg shadow">

              {/* Image OR Text Placeholder */}
              {review.img ? (
                <img
                  src={review.img}
                  alt="review"
                  className="w-full h-55 object-cover rounded-md"
                />
              ) : (
                <div className="w-full h-55 flex items-center justify-center bg-gray-100 rounded-md px-4 text-sm text-gray-700">
                  {review.text}
                </div>
              )}

              {/* Review text (below image if image exists) */}
              {review.img && (
                <p className="mt-3 text-sm text-gray-700">
                  {review.text}
                </p>
              )}

              {/* Stars */}
              <div className="flex justify-center mt-3 text-black">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Name */}
              <div className="flex justify-center items-center gap-1 mt-2 font-semibold">
                {review.name}
                <FaCheckCircle className="text-black text-sm" />
              </div>

              {/* Product */}
              <p className="text-sm text-gray-500 mt-1">
                {review.product}
              </p>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;