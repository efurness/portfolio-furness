import SectionContainer from "../layout/SectionContainer";

const BlogDetails = () => {
  return (
    <SectionContainer pageId={"blog-details"}>
      <div className="blog-page">
        <div className="blog-image">
          <img src="img/blog/blog-page-img.jpg" alt="" />
        </div>
        <div className="blog-container">
          <div className="row">
            {/*Blog Heading Start*/}
            <div className="blog-heading col-md-8 offset-md-2">
              <span className="cat">Design</span>
              <h1>Welcome to my blog</h1>
              <span className="blog-date">January 20, 2022</span>
            </div>
            {/*Blog Heading Start*/}
            {/*Blog Content Start*/}
            <div className="blog-content col-md-10 offset-md-1">
              
            <p>
                Please come back every week to see new maps!
              </p>

              <blockquote>
              Fire Map, United States
              </blockquote>

              <center>
    <h6><a href="https://arcg.is/bauPi0">Fire by Forest Type, United States</a></h6>


    <iframe src="https://arcg.is/bauPi0" width="80%" height="400px" allowFullScreen allow="geolocation" title="Experience Builder"></iframe>
    </center>


              <blockquote>
              Google Maps, Idaho Springs, CO
              </blockquote>
<center>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d98180.31939486875!2d-105.67066767346049!3d39.7366186980911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ba525c91b6e55%3A0xfb9e9ae2915f3f68!2sIdaho%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1707018892894!5m2!1sen!2sus" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
              <blockquote>


              </blockquote>
              </center>
              <blockquote>
              Thermal Map, United States
              </blockquote>

              <center>

    <h6><a href="https://arcg.is/159z0X0">Satellite (VIIRS) Thermal Hotspots and Fire Activity</a></h6>


    <iframe src="https://arcg.is/159z0X0" width="80%" height="400px" allowFullScreen allow="geolocation" title="Experience Builder"></iframe>
    </center>
    <br />

              < br />
              <blockquote>Earthquake and Hurricanes, United States, ArcGIS Experience Builder
              </blockquote>
              <center>
    <h6><a href="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801">ArcGIS Experience Builder</a></h6>


    <iframe src="https://experience.arcgis.com/experience/94d871b4838548d9a8bc44f44addd801" width="80%" height="400px" allowFullScreen allow="geolocation" title="Experience Builder"></iframe>
    <h6>courtesy - WEBGIS 5th edition exercise, Pinde Fu</h6>
    </center>
            </div>
            

            {/*Blog Content End*/}
            {/*Blog Comments Start*/}
            <div className="blog-comments col-md-8 offset-md-2">
              <h4 className="mb-40">Post Comments</h4>
              <ul className="comment-list">
                <li className="comment">
                  <div className="author-img">
                    <img src="img/blog/authors/pup.png" alt="" />
                  </div>
                  <div className="comment-text">
                    <span className="reply">
                      <a href="#">Reply</a>
                    </span>
                    <h6 className="author">Patricia F.</h6>
                    <span className="date">February 2, 2024 at 5:19</span>
                    <p>
                      You are very knowledgable about your subject and continue to do outstanding map making {" "}
                    </p>
                  </div>
                </li>
                <li className="comment">
                  <div className="author-img">
                    <img src="img/blog/authors/author-2.jpg" alt="" />
                  </div>
                  <div className="comment-text">
                    <span className="reply">
                      <a href="#">Reply</a>
                    </span>
                    <h6 className="author">Cynthia K. Godoy, NCIDQ_Principal</h6>
                    <span className="date">June 10, 2022 at 5:39 am</span>
                    <p>
                      Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie
                      consequat flexitarian four loko{" "}
                    </p>
                  </div>
                </li>
                <li className="comment">
                  <div className="author-img">
                    <img src="img/blog/authors/author-3.jpg" alt="" />
                  </div>
                  <div className="comment-text">
                    <span className="reply">
                      <a href="#">Reply</a>
                    </span>
                    <h6 className="author">John Doe</h6>
                    <span className="date">June 10, 2022 at 5:39 am</span>
                    <p>
                      Deep v cliche lomo biodiesel Neutra selfies. Shorts fixie
                      consequat flexitarian four loko{" "}
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            {/*Blog Comments End*/}
            <div className="comment-form col-lg-8 offset-lg-2">
              <h4 className="mt-40 mb-40">Leave A Reply</h4>
              <form action="#">
                <div className="row">
                  {/*Name Field*/}
                  <div className="col-md-6 mb-50">
                    <span className="input">
                      <input
                        className="input__field"
                        type="text"
                        id="name"
                        name="name"
                        required=""
                      />
                      <label className="input__label" htmlFor="name">
                        Name
                      </label>
                    </span>
                  </div>
                  {/*Email Field*/}
                  <div className="col-md-6 mb-50">
                    <span className="input">
                      <input
                        className="input__field"
                        type="text"
                        id="email"
                        name="email"
                        required=""
                      />
                      <label className="input__label" htmlFor="email">
                        Email
                      </label>
                    </span>
                  </div>
                  {/*Message Box*/}
                  <div className="col-md-12 mb-30">
                    <span className="input">
                      <textarea
                        className="input__field"
                        id="message"
                        name="message"
                        rows={5}
                        required=""
                        defaultValue={""}
                      />
                      <label className="input__label" htmlFor="message">
                        Your Comment
                      </label>
                    </span>
                  </div>
                  {/*Submit Button*/}
                  <div className="col-md-12">
                    <button className="btn-main">Post Comment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
export default BlogDetails;
