import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import BannerContent from "../src/components/BannerContent";
import { WatsonContext } from "../src/context/Context";
// import Layout from "../src/layout/Layout";
import { heroSlider } from "../src/sliderProps";
import { defaultPageAnimationByPageName } from "../src/utils";

import dynamic from "next/dynamic";

const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});

const IndexDarkSlider = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkSlider);
  }, []);
  return (
    <Layout>
      <section id="home" className="banner-section pt-page">
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
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDarkSlider;
