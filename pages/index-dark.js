import { useContext, useEffect } from "react";
import { WatsonContext } from "../src/context/Context";
import { defaultPageAnimationByPageName } from "../src/utils";

import dynamic from "next/dynamic";
const BannerContent = dynamic(() => import("../src/components/BannerContent"), {
  ssr: false,
});
const Layout = dynamic(() => import("../src/layout/Layout"), {
  ssr: false,
});

const IndexDark = () => {
  const { pageAnimationChange } = useContext(WatsonContext);
  useEffect(() => {
    pageAnimationChange(defaultPageAnimationByPageName.indexDark);
  }, []);

  return (
    <Layout>
      <section
        id="home"
        className="banner-section pt-page"
        style={{ backgroundImage: 'url("img/background/home-bg.jpg")' }}
      >
        <BannerContent />
      </section>
    </Layout>
  );
};
export default IndexDark;
