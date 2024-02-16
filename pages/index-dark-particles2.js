import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { ParticlesDotBg } from "../src/components/ParticlesBackground";
import { WatsonContext } from "../src/context/Context";
import { defaultPageAnimationByPageName } from "../src/utils";
const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});

const IndexDarkParticles2 = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDarkParticles2);
  }, []);
  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <div id="particles-js">
          <ParticlesDotBg />
        </div>
      </section>
    </Layout>
  );
};
export default IndexDarkParticles2;
