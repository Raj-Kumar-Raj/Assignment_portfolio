import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Calculator",
      description: "Developed a Calculator using React.js",
      imgUrl: projImg1,
      githubLink: "https://github.com/Raj-Kumar-Raj/Calculator",
    },
    {
      title: "Apna Video Call (Full Stack Project)",
      description: "A full-stack video calling app replicating Zoom",
      imgUrl: projImg2,
      githubLink: "https://github.com/Raj-Kumar-Raj/ApnaVideoCall",
    },
    {
      title: "Rock Paper Scissors",
      description:
        "Built a rock paper scissors game using HTML, CSS, and JavaScript",
      imgUrl: projImg3,
      githubLink:
        "https://github.com/Raj-Kumar-Raj/javaScriptProject-rock-paper-scissors",
    },
    {
      title: "Weather App",
      description: "Developed a weather app using React and Tailwind CSS",
      imgUrl: projImg1,
      githubLink: "https://github.com/Raj-Kumar-Raj/Weather-app",
    },
    {
      title: "WanderLust (Full Stack Project)",
      description: "An Airbnb clone",
      imgUrl: projImg2,
      githubLink: "https://github.com/Raj-Kumar-Raj/MAJORPROJECT",
    },
    {
      title: "Simon Says Game",
      description:
        "Developed a Simon Says game using HTML, CSS, and JavaScript",
      imgUrl: projImg3,
      githubLink: "https://github.com/adrianhajdin/projects_realestate",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I've embarked on numerous projects throughout the years, but
                    these are the ones I hold closest to my heart. Many of them
                    are open-source, so if you come across something that piques
                    your interest, feel free to explore the codebase and
                    contribute your ideas for further enhancements. Your
                    collaboration is highly valued!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          <h2>Work Experience</h2>
                          I've worked with Codsoft as an intern, gaining
                          practical experience in Java and related technologies.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          <h2>Key Highlights:</h2>
                          <h4>Major Projects:</h4>
                          Developed two significant MERN Stack projects that
                          showcase my skills in full-stack development. These
                          projects include a comprehensive e-commerce platform
                          and a social media application, both featuring user
                          authentication, dynamic content, and responsive
                          design.
                          <br />
                          <h4>Virtual Internship:</h4>
                          Completed an internship at Codsoft, gaining practical
                          experience in Java and related technologies.
                          <br />
                          <h4>HackerRank Achievement:</h4>
                          Earned a five-star rank on HackerRank, reflecting my
                          proficiency in coding and problem-solving.
                          <br />I am enthusiastic about contributing to the
                          field of software development and eager to learn and
                          grow through new experiences and opportunities. Feel
                          free to connect with me to discuss technology, share
                          ideas, or explore potential collaborations!
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background"
      />
    </section>
  );
};
