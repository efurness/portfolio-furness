import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { WatsonContext } from "../src/context/Context";
import { heroSlider } from "../src/sliderProps";
import { defaultPageAnimationByPageName } from "../src/utils";
const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});

const IndexLightSlider = () => {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightSlider);
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
      </section>
    </Layout>
  );
};
export default IndexLightSlider;
