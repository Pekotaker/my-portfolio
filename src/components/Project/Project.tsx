import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";

const projectList = [
  {
    title: "DongHanh-Scholarship",
    description:
      "Develop a web application for DongHanh Scholarship, a non-profit organization that provides scholarships to Vietnamese students in need. The application includes a user-friendly interface for students to apply for scholarships, and administrators to manage applications, and a back-end AI-powered screening assistant system for efficient scholarship selection.",
    tech: ["AWS", "FastAPI", "React", "PostgreSQL", "Docker"],
    github: "https://github.com/DongHanh-Scholarship",
    link: "https://thesis-project.ngvo.tech/login",
  },
  {
    title: "basicchat",
    description:
      "A project to build a web messenger chat app, utilizing Firebase and React.",
    tech: ["React", "Firebase"],
    github: "https://github.com/Pekotaker/basicchat",
  },
  {
    title: "Dice Roller",
    description:
      "A basic window application used in classes to teach 6th grade students Statistics and Probability",
    tech: ["C#", "Windows Forms"],
    github: "https://github.com/Pekotaker/Dice-Roller",
  },
  {
    title: "HandWrittenNumbers",
    description:
      "A project to recognize handwritten numbers using CNN and the MNIST dataset",
    tech: ["Python", "Jupyter Notebook", "Tensorflow", "Keras", "OpenCV"],
    github: "https://github.com/Pekotaker/HandWrittenNumbers",
  },
  {
    title: "KurisuGPT",
    description: "A project to build a discord chatbot using GPT-3",
    tech: ["Python", "Discord API", "OpenAI"],
    github: "https://github.com/Pekotaker/KurisuGPT",
  },
];

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projectList.map((project, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="project">
              <header>
                <svg
                  width="50"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#23ce6b"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {" "}
                  <title>Folder</title>{" "}
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>{" "}
                </svg>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="Visit site" />
                  </a>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <img src={externalLink} alt="Visit site" />
                    </a>
                  )}
                </div>
              </header>
              <div className="body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <footer>
                <ul className="tech-list">
                  {project.tech.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </footer>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
