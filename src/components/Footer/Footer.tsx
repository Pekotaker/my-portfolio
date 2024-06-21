import { Container } from "./styles";
import reactIcon from "../../assets/react-icon.svg";
import linkedin from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";
import facebookIcon from "../../assets/facebook-icon.svg";
import twitterIcon from "../../assets/twitter-icon.svg";
import steamIcon from "../../assets/steam-icon.svg";
import itchIcon from "../../assets/itch-icon.svg";
import vietnamworksIcon from "../../assets/vietnamworks-icon.svg";
// import discordIcon from '../../assets/discord.png'

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          This Website was made with <img src={reactIcon} alt="React" />
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/pekotaker/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a href="https://github.com/Pekotaker" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://www.facebook.com/pekotaker"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebookIcon} alt="Facebook" />
        </a>
        <a href="https://x.com/pekotaker" target="_blank" rel="noreferrer">
          <img src={twitterIcon} alt="Twitter" />
        </a>
        <a
          href="https://steamcommunity.com/id/pekotaker"
          target="_blank"
          rel="noreferrer"
        >
          <img src={steamIcon} alt="Steam" />
        </a>
        <a href="https://pekotaker.itch.io/" target="_blank" rel="noreferrer">
          <img src={itchIcon} alt="Itch.io" />
        </a>
      </div>
    </Container>
  );
}
