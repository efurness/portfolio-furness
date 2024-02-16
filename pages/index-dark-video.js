import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { WatsonContext } from "../src/context/Context";
import { defaultPageAnimationByPageName } from "../src/utils";
const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});
const IndexDarkVideo = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkHtml5Video);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div id="video-container">
          <video
            id="videobg"
            poster="images/poster.jpg"
            autoPlay
            muted
            loop
            src="video/video1.mp4"
          ></video>
        </div>
      </section>
    </Layout>
  );
};
export default IndexDarkVideo;
