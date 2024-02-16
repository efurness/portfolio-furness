import { Swiper, SwiperSlide } from "swiper/react";
import { heroSlider } from "../sliderProps";
const BannerSlider = () => {
  return (
    <div className="banner-slider">
      <div id="slides">
        <Swiper {...heroSlider} className="slides-container">
          {/*Slide 1*/}
          <SwiperSlide>
            <img src="img/slider/img-1.jpg" alt="" />
          </SwiperSlide>
          {/*Slide 2*/}
          <SwiperSlide>
            <img src="img/slider/img-2.jpg" alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
export default BannerSlider;
