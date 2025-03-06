import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import {
  TextLoop,
  Span,
  ResumeButton,
  Desc,
  SubDesc,
  SubTitle,
  Container,
  Wrapper,
  Title
} from "./AboutStyle";


const SocialLinks = () => {
  return (
    <div
    style={{
      display: "flex",
      gap: "20px",
      justifyContent: "left",
      alignItems: "center",
      marginTop: "-50px",
      marginBottom: "-30px",
    }}
  >
    <a
      href={`mailto:${Bio.email}`}
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <EmailIcon  />
    </a>
    <a
      href={Bio.github}
      target="display"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <GitHubIcon/>
    </a>
    <a
      href={Bio.linkedin}
      target="display"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <LinkedInIcon />
    </a>
{/*
    <a
      href={Bio.leetcode}
      target="display"
      style={{ color: "inherit", textDecoration: "none" }}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/0/0a/LeetCode_Logo_black_with_text.svg" // Replace with the actual image URL
        alt="LeetCode"
        style={{ width: "80px", height: "80px" }} // Adjust dimensions as needed
      />
    </a> */}
  </div>
  );
};


const About = () => {
  return (
    <div id="about">
    <Container>
      <Wrapper>
        <Title>About Me</Title>
            <TextLoop>
              Aspiring
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>

        <br />
        <SocialLinks />

            <Desc>
        I'm <b>open to relocating</b> and continue my journey as a software engineer. My goal is to work with a team that values <b>collaboration</b>, <b>continuous learning</b>, and the application of technology to <b>solve meaningful problems</b>.
        </Desc>

              <SubDesc>
              My journey in tech started with the fundamentals during my undergraduate studies at the University of Hawai'i at Manōa. Since then, I've expanded my expertise, particularly in <b>full-stack development</b> and <b>machine learning</b>.
              </SubDesc>
              <SubDesc>
              🤖⚙️🔧🦾👩‍💻💻
              </SubDesc>
              <SubDesc>
              I've had the privilege of working on a range of exciting projects—from improving mobile app security through natural language processing to deploying machine learning models that enhance decision-making processes.
              </SubDesc>

              <SubTitle>
              <b>Languages</b>
              </SubTitle>
              <SubDesc>
              English 🇺🇸,
              Portuguese 🇧🇷,
              Spanish 🇲🇽
              </SubDesc>

              <SubTitle>
              <b>Interests & Hobbies</b>
              </SubTitle>
              <SubDesc>
              When I'm not writing code, I enjoy staying active by working out 🏋️‍♀️, cooking new dishes 🍝, and exploring different music genres 🎸.
              </SubDesc>
              <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>

      </Wrapper>

    </Container>
    </div>
  );
};

export default About;
