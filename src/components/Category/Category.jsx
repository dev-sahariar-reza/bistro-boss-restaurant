import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import slider1 from "../../assets/category-slider/slide1.jpg";
import slider2 from "../../assets/category-slider/slide2.jpg";
import slider3 from "../../assets/category-slider/slide3.jpg";
import slider4 from "../../assets/category-slider/slide4.jpg";
import slider5 from "../../assets/category-slider/slide5.jpg";

const Category = () => {
  return (
    <section className="boss-container">
        <h3 className="boss-heading-subtext">---From 11:00am to 10:00pm---</h3>
        <h1 className="boss-heading">ORDER ONLINE</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" loading="lazy"/>
          <h3 className="boss-category-text">Salad</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" loading="lazy"/>
          <h3 className="boss-category-text">Pizza</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" loading="lazy"/>
          <h3 className="boss-category-text">Soup</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" loading="lazy"/>
          <h3 className="boss-category-text">Desert</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" loading="lazy"/>
          <h3 className="boss-category-text">Cocktail</h3>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
