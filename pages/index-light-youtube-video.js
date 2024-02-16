import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { WatsonContext } from "../src/context/Context";
import { defaultPageAnimationByPageName } from "../src/utils";
const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});

const IndexLightYoutubeVideo = () => {
  useEffect(() => {
    let { jarallax, jarallaxVideo } = require("jarallax");
    jarallaxVideo();
    jarallax(document.querySelectorAll("#video-container"), {
      speed: 0.5,
      keepImg: true,
      automaticResize: true,
      videoVolume: 0,
    });
  }, []);

  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightYoutubeVideo);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div
          id="video-container"
          data-jarallax-video="https://youtu.be/spDj54kf-vY"
        ></div>
      </section>
    </Layout>
  );
};
export default IndexLightYoutubeVideo;
