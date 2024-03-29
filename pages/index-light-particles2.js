import dynamic from "next/dynamic";
import { useContext, useEffect } from "react";
import { ParticlesDotBg } from "../src/components/ParticlesBackground";
import { WatsonContext } from "../src/context/Context";
import { defaultPageAnimationByPageName } from "../src/utils";
const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});

const IndexLightParticles2 = () => {
  const { changeThemeVersion, pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    changeThemeVersion("light");
    pageAnimationChange(defaultPageAnimationByPageName.indexLightParticles2);
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
export default IndexLightParticles2;
