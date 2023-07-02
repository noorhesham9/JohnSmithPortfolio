import "./testimonials.css";
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My clients say</span>

      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={24}
        pagination={{ clickable: true }}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          575: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
        modules={[Pagination, Autoplay]}
        className="testimonial__container">
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide key={id} className="testimonial__card">
              <img src={image} alt="" className="testimonial__image" />
              <h3 className="testimonial__name">{title}</h3>
              <p className="testimonial__description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
