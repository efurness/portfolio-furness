import { Fragment, useContext } from "react";
import { WatsonContext } from "../context/Context";
import SectionContainer from "../layout/SectionContainer";
import BlogDetails from "./BlogDetails";
const Blog = () => {
  const { changeSection } = useContext(WatsonContext);
  return (
    <Fragment>
      <SectionContainer
        pageId="blog"
        pageIcon={"lnr lnr-book"}
        pageTitle={"My Blogs."}
      >
        <div className="row blogs-masonry">
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/design.png" alt="web" />
              </div>
              <div className="blog-content">
                <span className="cat">Web Design</span>
                <h4 className="blog-title">Best Way to Design</h4>
                <div className="blog-date">Feb 2, 2024</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/cat.png" alt="cat image" />
              </div>
              <div className="blog-content">
                <span className="cat">Personal</span>
                <h4 className="blog-title">Things I Need to Get Started</h4>
                <div className="blog-date">August 10, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/monitor.png" alt="monitor image" />
              </div>
              <div className="blog-content">
                <span className="cat">Design</span>
                <h4 className="blog-title">My Current Workspace</h4>
                <div className="blog-date">August 4, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/park.png" alt="NPS image" />
              </div>
              <div className="blog-content">
                <span className="cat">Galivanting</span>
                <h4 className="blog-title">Best Place to Visit this Summer</h4>
                <div className="blog-date">July 28, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/color.png" alt="web design image" />
              </div>
              <div className="blog-content">
                <span className="cat">Web Design</span>
                <h4 className="blog-title">
                  Latest UI Trends to Inspired From
                </h4>
                <div className="blog-date">July 25, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/tech.png" alt="tech" />
              </div>
              <div className="blog-content">
                <span className="cat">Technology</span>
                <h4 className="blog-title">Latest Tech 2024</h4>
                <div className="blog-date">July 19, 2023</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/sillouett.png" alt="bike image" />
              </div>
              <div className="blog-content">
                <span className="cat">LifeStyle</span>
                <h4 className="blog-title">Take a break!</h4>
                <div className="blog-date">July 10, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/vscode.png" alt="vscode image" />
              </div>
              <div className="blog-content">
                <span className="cat">Technology</span>
                <h4 className="blog-title">Best Editing Software</h4>
                <div className="blog-date">February 1, 2022</div>
              </div>
            </a>
          </div>
          <div className="col-lg-4 col-sm-6">
            <a
              href="#"
              onClick={() => changeSection("blog-details")}
              className="blog-item"
            >
              <div className="blog-image">
                <img src="img/blog/rehobeth.png" alt="beach image" />
              </div>
              <div className="blog-content">
                <span className="cat">Traveling</span>
                <h4 className="blog-title">Take a siesta</h4>
                <div className="blog-date">June 24, 2023</div>
              </div>
            </a>
          </div>
        </div>
      </SectionContainer>
      <BlogDetails />
    </Fragment>
  );
};
export default Blog;
