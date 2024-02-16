import { Swiper, SwiperSlide } from "swiper/react";
import SectionContainer from "../layout/SectionContainer";
import { clientSliderProps, testimonialSliderProps } from "../sliderProps";
const About = () => {
  return (
    <SectionContainer
      pageId={"about"}
      pageIcon={"lnr lnr-user"}
      pageTitle={"About Me."}
    >
      <div className="row about mb-70">
        <div className="col-lg-8">
          {/*Personal Intro*/}
          <h3 className="mb-20">GIS Analyst &amp; Web Builder, Biologist</h3>
          <p>
          Pursuing a GIS Specialist position and learning ArcGIS Pro with Python and Web GIS are my current self-study curricula.  
          My studies include Population Biology, GIS, and Web Coding Development. 
          I have two Masters of  Science degrees,  Geographical Information Systems and Population Biology.  
          I participated in Burned Area Emergency Rehabilitation (BAER) with the US Forest Service, as well as being employed as a GIS technician.   
          I have conducted mapping, biological research and web building for the National Park Service, as well as 
          designing the Colorado College, Geology and Antarctica ISES websites.
          </p>
          <p>I love hiking with my English Retriever dog and enjoy cycling, snowshoeing, and skiing!</p>
        </div>
        {/*Personal Info*/}
        <div className="col-lg-4">
          <div className="about-info">
            <h3 className="mb-20"></h3>
            <ul>
            </ul>
            <div className="resume-button mt-30">
              <a className="btn-main" href="https://efurness.github.io/ellen-s-react-portfolio/Resume2024.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About Info Row End*/}
      {/*Services Row Start*/}
      <div className="row services mb-30">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Solutions</h3>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop" />
            </div>
            <h4>Build REACT -- JavaScript</h4>
            <p>
              Experience in developimg  two REACT Apps, first a site built-from-scratch github portfolio for a full-stack web development class
              and this site, a re-rendering of a NEXT.JS REACT template.  

            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-eye" />
            </div>
            <h4>Arc GIS Pro, Online</h4>
            <p>
              Python for Arc GIS Pro using course materials.  
              Developed a Arc GIS Story Map and Web map, using ArcGIS Pro, Online and Web Map Builder.
               Converting to Arc GIS Pro from Arc Map.
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-laptop-phone" />
            </div>
            <h4>Responsive Web Design</h4>
            <p>              
            Designing interactive content and
            mobile responsive websites. 
            
            </p>
          </div>
        </div>
        {/*Service Item*/}
        <div className="col-lg-3 col-sm-6">
          <div className="service-item">
            <div className="icon">
              <i className="lnr lnr-camera" />
            </div>
            <h4>Biological Research</h4>
            <p>
              Studied Population and Applied Biology and conducted field surveys and biological research, GPS surveys and Stand CSE exams.
            </p>
          </div>
        </div>
      </div>
      {/*Services Row End*/}
      {/*Clients Row Start*/}
      <div className="row clients mb-70">
        <div className="col-md-12">
          <div className="subheading">
            <h3>LINKS</h3>
          </div>
        </div>
        <Swiper {...clientSliderProps} className="">
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-01.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-02.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-03.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-04.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-05.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-06.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-07.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-08.png" alt="" />
            </a>
          </SwiperSlide>
          {/*Client Logo*/}
          <SwiperSlide className="client-logo">
            <a href="#">
              <img src="img/clients/client-09.png" alt="" />
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*Clients Row End*/}
      {/*Testimonials Row Start*/}
      <div className="row testimonials mb-50">
        <div className="col-md-12">
          <div className="subheading">
            <h3>Testimonials</h3>
          </div>
          <Swiper {...testimonialSliderProps} className="">
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  I am delighted to wholeheartedly recommend my friend from Web Development bootcamp for her pursuit of a career in GIS.  Her persistance
                  is truly commendable as she consistently strives for excellence in every endeavor.
                  What sets her apart is an unsatiable desire to keep learning, a trait that extends
                  beyond the norm.  Since our school days concluded she digs deeper into the world of programming,
                  devouring at least seven books on the subject.  Her commitment to continuous growth is not just impressive
                  but also inspiring.  I am confident that her passion and dedication will make her an
                  invaluable asset to any GIS team.

                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/testimonials/cynthia.png" alt="" />
                <div className="meta-info">
                  <h4>Cynthia K. Godoy, NCIDQ_Principal</h4>
                  <p>Digital Marketing Executive</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Exceeds in JavaScript API's, Web development and ArcGIS
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/testimonials/pup.png" alt="" />
                <div className="meta-info">
                  <h4>Patricia</h4>
                  <p>Creative Director</p>
                </div>
              </div>
            </SwiperSlide>
            {/*Testimonail Item*/}
            <SwiperSlide className="testimonial-item">
              <div className="testimonial-content">
                <p>
                  Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                  deserunt suscipit eos fugit. Consectetur dolorum temporibus
                  facilis impedit exercitationem dignissimos.
                </p>
              </div>
              <div className="testimonial-meta">
                <img src="img/testimonials/author-3.jpg" alt="" />
                <div className="meta-info">
                  <h4>Jack Smith</h4>
                  <p>Marketing Director</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        {/*Testimonials Row End*/}
      </div>
    </SectionContainer>
  );
};
export default About;
