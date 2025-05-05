import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import {
  Container,
  GridWrapper,
  Title,
  TextLoop,
  Span,
  Desc,
  SubDesc,
  SubTitle,
  Tag,
  TagsContainer,
  ResumeButton,
  Img,
  SocialRow,
} from "./AboutStyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

const About = () => {
  return (
    <div id="about">
      <Container>
        <GridWrapper>
          {/* <Img
            src="../../../.."
            alt="Profile"
          /> */}

  

          <Title>About Me</Title>
             <SocialRow>
            <a href={`mailto:${Bio.email}`}>
              <EmailIcon />
            </a>
            <a href={Bio.github} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <a href={Bio.linkedin} target="_blank" rel="noreferrer">
              <LinkedInIcon />
            </a>
          </SocialRow>

          <TextLoop>
            Aspiring{" "}
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

          <SubTitle>🌱 Fields I Enjoy</SubTitle>
          <TagsContainer>
            <Tag>Full-Stack Dev</Tag>
            <Tag>Data Visualization</Tag>
            <Tag>ML / NLP</Tag>
            <Tag>Algorithms</Tag>
          </TagsContainer>

          <Desc>
            I'm <b>open to relocating</b> and continuing my journey as a
            software engineer. I value <b>collaboration</b>,{" "}
            <b>continuous learning</b>, and using tech to{" "}
            <b>solve meaningful problems</b>.
          </Desc>

          <SubDesc>
            My journey started at the University of Hawai'i at Mānoa and evolved
            into <b>full-stack development</b> and <b>machine learning</b>.
          </SubDesc>


          <SubTitle>🧠 Algorithm Practice</SubTitle>
          <SubDesc>
            Actively practicing on{" "} LeetCode
          </SubDesc>
          <div style={{ width: "60%", textAlign: "center" }}>
            <img
              src="https://leetcard.jacoblin.cool/acoa?theme=light&font=Khula&ext=heatmap"
              alt="LeetCode Stats"
              style={{
                maxWidth: "80%",
                height: "auto",
                marginTop: "-12px",
              }}
            />
          </div>


          <SubTitle>Languages</SubTitle>
          <SubDesc>English 🇺🇸, Portuguese 🇧🇷, Spanish 🇲🇽</SubDesc>

          <SubTitle>Interests & Hobbies</SubTitle>
          <SubDesc>
            Working out 🏋️‍♀️, cooking 🍝, and exploring music 🎸
          </SubDesc>

          <ResumeButton href={Bio.resume} target="_blank">
            Resume
          </ResumeButton>
        </GridWrapper>
      </Container>
    </div>
  );
};

export default About;
