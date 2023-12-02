import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { useEffect, useState } from "react";
import img from "../../assets/testimonials/quote-left 1.png";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <section className="boss-container">
      <div className="pt-10 mb-8">
        <h3 className="boss-heading-subtext">---What Our Clients Say---</h3>
        <h1 className="boss-heading">TESTIMONIALS</h1>
      </div>
      <div className="w-full lg:w-3/4 lg:mx-auto">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial._id}>
              <div className="flex flex-col justify-center items-center">
                <Rating
                  style={{ maxWidth: 200, margin: "auto" }}
                  value={testimonial.rating}
                  readOnly
                />

                <div>
                  <img
                    src={img}
                    alt="testimonial logo"
                    className="mt-7 mb-10"
                  />
                </div>

                <p className="text-justify mb-4">{testimonial.details}</p>
                <h3 className="text-xl text-[#D99904] font-bold">
                  {testimonial.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
