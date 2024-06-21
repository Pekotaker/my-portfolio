import { Container } from "./styles";
import NguyenVu from "../../assets/NguyenVu.jpg";
import aspIcon from "../../assets/asp-icon.svg";
import cSharpIcon from "../../assets/csharp-icon.svg";
import cppIcon from "../../assets/cpp-icon.svg";
import firebaseIcon from "../../assets/firebase-icon.svg";
import gitIcon from "../../assets/git-icon.svg";
import javaIcon from "../../assets/java-icon.svg";
import materialIcon from "../../assets/material-icon.svg";
import mongoIcon from "../../assets/mongo-icon.svg";
import tailwindIcon from "../../assets/tailwind-icon.svg";
import dockerIcon from "../../assets/docker-icon.svg";
import pythonIcon from "../../assets/python-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import boostrapIcon from "../../assets/bootstrap-icon.svg";

import ScrollAnimation from "react-animate-on-scroll";

const mainSkills = [
  pythonIcon,
  jsIcon,
  typescriptIcon,
  reactIcon,
  nodeIcon,
  htmlIcon,
  cssIcon,
  boostrapIcon,
  materialIcon,
  vueIcon,
  cSharpIcon,
  mongoIcon,
  firebaseIcon,
];

const altSkills = [
  "Python",
  "Javascript",
  "Typescript",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "Bootstrap",
  "Material-UI",
  "Vue",
  "C#",
  "MongoDB",
  "Firebase",
];

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
            Hi there! I'm Trịnh Lê Nguyên Vũ, a full-stack developer based in
            Vietnam. I specialize in creating fast, responsive websites with a
            focus on user experience. I'm passionate about web development and
            love to create websites that are not only visually appealing but
            also highly functional.
          </p>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInLeft"
          delay={0.2 * 1000}
          style={{ marginTop: "2rem", marginBottom: "2rem" }}
        >
          <p>
            I participated in IT Contests in middle school, high school, and
            ICPC in college. Currently, I am studying in HCMUS in my final year.
            My GPA is 7.96. Most of my programming skills are self-taught
            because that's my school's motto.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            I'm currently looking for internships so that I can earn experience,
            skills, knowledge, and a good resume (if possible, some pocket money
            so I can start becoming less of a burden for my parents).
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Here are my main skills:</h3>
        </ScrollAnimation>
        <div className="hard-skills">
          {mainSkills.map((skill, index) => (
            <div className="hability" key={index}>
              <ScrollAnimation animateIn="fadeInUp" delay={0.1 * index * 1000}>
                <img src={skill} alt={altSkills[index]} />
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={NguyenVu} alt="Nguyên Vũ" />
        </ScrollAnimation>
      </div> */}
    </Container>
  );
}
