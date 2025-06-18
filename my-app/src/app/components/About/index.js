import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import {
  Container,
  GridWrapper,
  Title,
  TextLoop,
  Span,
  Desc,
  SubTitle,
  SubDesc,
  Tag,
  TagsContainer,
  Img,
  SocialRow,
  AlbumContainer,
  AlbumImage,
  HighlightItem,
  
  HighlightSection,
  HighlightTitle,
  HighlightText,
  ProjectBullet,
} from "./AboutStyle";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";




const About = () => {
  return (
    <div id="about">
      <Container>
        <GridWrapper>
          {/* <Img src="/assets/profile-pic.png" alt="Profile" /> */}

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
            ♡{" "}
            <Span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </Span>
            𓇢𓆸
          </TextLoop>

          <Desc>
            I’m Ana, a software engineer working at <b>@Apple</b> with a focus on full-stack
            development. I enjoy building tools that help people and digging into problems
            that require <u>thoughtful design</u> and <u>data-driven thinking</u>. From cleaning data to
            clean UIs, I like working across layers of the stack.
          </Desc>

          <SubTitle>Fields I Enjoy</SubTitle>
          <TagsContainer>
            <Tag>Data Visualization</Tag>
            <Tag>NLP</Tag>
             <Tag>Computer Vision</Tag>
            <Tag>Algorithms</Tag>
          </TagsContainer>

          <SubTitle style={{ marginTop: "2rem" }}>Key Highlights</SubTitle>
          <HighlightSection>
            <HighlightItem>
              <HighlightTitle>Projects</HighlightTitle>
              <HighlightText>
                <ProjectBullet>🌿 <strong>Coffee Plant Pathology</strong>: Classified leaf diseases with 87% accuracy using ResNet50 and CNNs.</ProjectBullet>
                <ProjectBullet>📑 <strong>Receipt Manager</strong>: Built with OCR + GPT-4 to help users track expenses with 50% better accuracy.</ProjectBullet>
                <ProjectBullet>🌊 <strong>Marine Debris System</strong>: Created chatbot-integrated app for debris tracking and hotline escalation.</ProjectBullet>
                <ProjectBullet>📜 <strong>DOE Legislative Tracker</strong>: Developed real-time bill tracking tool with role-based access.</ProjectBullet>
              </HighlightText>
            </HighlightItem>

            <HighlightItem>
              <HighlightTitle>Research</HighlightTitle>
              <HighlightText>
                🔍 Fine-tuned LLMs to detect 27 types of software vulnerabilities using data from the NVD database.<br />
📊 Applied LDA to Stack Overflow posts to understand mobile security challenges.
              </HighlightText>
            </HighlightItem>

            <HighlightItem>
              <HighlightTitle>Awards</HighlightTitle>
              <HighlightText>
                🌟 2nd & 3rd Place - Hawaii Annual Code Challenge (HACC ‘22, ‘23) <br />
                🌟 Kalo Grant recipient for app development <br />
                🌟 1st place in cybersecurity internship capstone at World Wide Technology
              </HighlightText>
            </HighlightItem>
          </HighlightSection>


          {/* <Desc>
            I'm <b>open to relocating</b> and continuing my journey as a
            software engineer. I value <b>collaboration</b>,{" "}
            <b>continuous learning</b>, and using tech to{" "}
            <b>solve meaningful problems</b>.
          </Desc>

          <SubDesc>
            My journey started at the University of Hawai'i at Mānoa and evolved
            into <b>full-stack development</b> and <b>machine learning</b>.
          </SubDesc> */}


          {/* <SubTitle>🧠 Algorithm Practice</SubTitle>
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
          </div> */}


          {/* <SubTitle>Languages</SubTitle>
          <SubDesc>English 🇺🇸, Portuguese 🇧🇷, Spanish 🇲🇽</SubDesc>

          <SubTitle>Interests & Hobbies</SubTitle>
          <SubDesc>
            Working out 🏋️‍♀️, cooking 🍝, and exploring music 🎸
          </SubDesc>

          <ResumeButton href={Bio.resume} target="_blank">
            Resume
          </ResumeButton> */}


        </GridWrapper>
      </Container>
    </div>
  );
};

export default About;
