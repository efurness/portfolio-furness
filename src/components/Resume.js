import { useEffect } from "react";
import SectionContainer from "../layout/SectionContainer";
const Resume = () => {
  useEffect(() => {
    const progress_inner = document.querySelectorAll(".skill-item"),
      triggerBottom = (window.innerHeight / 5) * 5;
    progress_inner.forEach((box) => {
      const boxTop = box.getBoundingClientRect().top,
        bar = box.getElementsByClassName("progress-bar")[0],
        value = bar.getAttribute("data-progress-value");
      bar.style.width = `${value}%`;
    });
  }, []);

  return (
    <SectionContainer
      pageId="resume"
      pageIcon={"lnr lnr-license"}
      pageTitle={"My Resume."}
    >
      <div
        className="row mb-20"
        onScroll={() => {
          console.log("Hil");
        }}
      >
        {/*Experience Column Start*/}
        <div className="col-lg-6">
          <div className="subheading">
            <h3>Experience</h3>
          </div>
          <ul className="experience">
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>GIS, Web Developer, Biologist</h4>
                <h5>National Park Service, Air Resources Division</h5>
                <p className="info">
                
Assisted Webmaster in the design, maintenance, and conversion of the Air Resources Division websites to XHTML using
Adobe Dreamweaver/ColdFusion.
Created GIS maps, reports and documents.
Assisted Chief Biologist in analysis of air pollution in National Parks
                </p>
              </div>
              <span className="year">
                <span className="to">2001</span>
              </span>
            </li>
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Web Designer</h4>
                <h5>Colorado College Geology Dept. and Ises Antartica.</h5>
                <p className="info">
                Website design and maintenance of Geology Department websites and the Integrated Solid Earth Sciences (ISeS)
Antarctica website
Provided front-end website development using Dreamweaver and other editing software.
                </p>
              </div>
              <span className="year">
                <span className="to">2009</span>
              </span>
            </li>
            {/*Experience Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>GIS, BAER Team Technical Specialist/Project Leader</h4>
                <h5>U.S Forest Service</h5>
                <p className="info">
                Combined the use of aerial photographs, Digital Ortho Quads, Orthoimagery to interpret major vegetation/forest types
for the Turkey Creek watershed.
Use of GIS ArcInfo and ArcEdit Tools.
Set up ArcInfo watershed/riparian/vegetation coverages.
Verified final vegetation maps, conducting Region 2 exams.
Burned Area Emergency Rehabilitation (BAER) projects in watershed assessment of burned areas, aerial reconnaissance
by helicopter, topographic mapping of treatment sites and hydrophobicity soil testing.
As Project Leader and BAER Team Trainee, led technicians in conducting rehabilitation treatment plans that contributed
to Final Burned Area Rehabilitation Reports.
                </p>
              </div>
              <span className="year">
                <span className="to">2001</span>
              </span>
            </li>
          </ul>
        </div>
        
        {/*Experience Column End*/}
        {/*Education Column Start*/}
        <div className="col-lg-6">
          <div className="subheading">
            <h3>Education</h3>
          </div>
          <ul className="education">
                        {/*Education Item*/}
                        <li>
              <span className="line-left" />
              <div className="content">
                <h4>Full-stack Web Development, Bootcamp</h4>
                <h5>University of Denver USA</h5>
                <p className="info">
                  Learned to deploy websites using Javascript, MERN, REACT.
                </p>
              </div>
              <span className="year">
                <span className="to">2022</span>
              </span>
            </li>

            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Geographic Information Systems, M.S. Masters of Science, 2006</h4>
                <h5>U.S Forest Service</h5>
                <p className="info">
                ArcGIS modeling, spatial analyst.  Graduate Teaching Assistantship. GIS graduate projects.
                </p>
              </div>
              <span className="year">
                <span className="to">2006</span>
              </span>
            </li>
            {/*Education Item*/}
            <li>
              <span className="line-left" />
              <div className="content">
                <h4>Population Biology, M.S Masters of Science</h4>
                <h5>University of Colorado, Boulder</h5>
                <p className="info">
                Graduate teaching assistantship.
Master’s Thesis Paper
Conservation of Psittacine Species in a Park System.
Independent research of Northern Red-shafted Flickers (Colaptes auratus).
monitoring of nesting pairs for daily activity levels, foraging behavior and use of feeding sites.
Research Assistant, La Selva Research Station, Costa Rica
Group project of individual versus group foraging for the Paraponia ant. 
                </p>
              </div>
              <span className="year">
                <span className="to">1992</span>
              </span>
            </li>
                        {/*Education Item*/}
                        <li>
              <span className="line-left" />
              <div className="content">
                <h4>Bachelors of Art, Applied Biology</h4>
                <h5>University of Denver USA</h5>
                <p className="info">
                Behavioral Ecology of Mammals. Wilderness Field Station in Ely, Minnesota (BWCA).
Worked at the National Institutes of Health on genetic research project.
                </p>
              </div>
              <span className="year">
                <span className="to">1989</span>
              </span>
            </li>

          </ul>
        </div>
        {/*Education Column End*/}
      </div>
      {/*Education & Experience Row End*/}
      {/*Skills Row Start*/}
      <div className="row">
        {/*Design Skills Column Start*/}
        <div className="col-lg-6 skills">
          <div className="subheading">
            <h3>Arc GIS Skills</h3>
          </div>
          {/*Design Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Arc GIS Pro, Online</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={91}>
                <div className="progress-value">91%</div>
              </div>
            </div>
          </div>
          {/*Design Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Learning Python for Arc GIS Pro</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={82}>
                <div className="progress-value">80%</div>
              </div>
            </div>
          </div>
          {/*Design Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">Arc GIS API for JavaScript</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={94}>
                <div className="progress-value">75%</div>
              </div>
            </div>
          </div>
                    {/*Design Skill Item*/}
                    <div className="skill-item">
            <h4 className="progress-title">VS CODE, GITHUB</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={94}>
                <div className="progress-value">80%</div>
              </div>
            </div>
          </div>

        </div>
        
        {/*Design Skills Column End*/}
        {/*Coding Skills Column Start*/}
        <div className="col-lg-6 skills">
          <div className="subheading">
            <h3>Coding Skills</h3>
          </div>
                    {/*Coding Skill Item*/}
                    <div className="skill-item">
            <h4 className="progress-title">FULL-STACK REACT, NEXT.JS</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={83}>
                <div className="progress-value">83%</div>
              </div>
            </div>
          </div>

          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">HTML5</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={83}>
                <div className="progress-value">83%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">CSS3</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={75}>
                <div className="progress-value">75%</div>
              </div>
            </div>
          </div>
          {/*Coding Skill Item*/}
          <div className="skill-item">
            <h4 className="progress-title">JAVASCRIPT</h4>
            <div className="progress">
              <div className="progress-bar" data-progress-value={92}>
                <div className="progress-value">90%</div>
              </div>
            </div>
          </div>
        </div>
        
        {/*Coding Skills Column End*/}
      </div>
    </SectionContainer>
    
  );
};
export default Resume;
