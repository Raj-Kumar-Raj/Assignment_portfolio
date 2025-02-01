import { Col } from "react-bootstrap";
import { Github, BoxArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl || "/placeholder.svg"} alt={title} />
        <div className="proj-txtx">
          <div className="proj-content">
            <h4>{title}</h4>
            <span className="proj-description">{description}</span>
          </div>
          {githubLink && (
            <div className="proj-buttons">
              <p>For Details :</p>
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
                aria-label={`View ${title} source code on GitHub`}
              >
                <Github className="button-icon" />
                <span>Source Code</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};
