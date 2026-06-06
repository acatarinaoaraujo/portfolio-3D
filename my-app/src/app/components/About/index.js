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
  ResumeButton,
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
            I’m Ana, a software engineer working at <b>@Apple</b> with a focus
            on front-end development.
          </Desc>

          {/* <SubTitle style={{ marginTop: "2rem" }}>Key Highlights</SubTitle>
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
          </HighlightSection> */}

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

          <SubTitle>Languages</SubTitle>
          <SubDesc>🗣️ Native: 🇧🇷 | Fluent: 🇺🇸 | Learning: 🇲🇽 🇮🇹</SubDesc>

          <SubTitle>Interests & Hobbies</SubTitle>
          <SubDesc>
            Gym enthusiast 🏋️‍♀️, playlist curator 🎸, and escaping into the wild
            🌲
          </SubDesc>
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
            <a href={Bio.spotify} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://w3.org"
                viewBox="0 0 640 640"
                width="24"
                height="24"
                fill="currentColor"
              >
                {/* Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com Copyright 2026 Fonticons, Inc. */}
                <path d="M320 72C183 72 72 183 72 320C72 457 183 568 320 568C457 568 568 457 568 320C568 183 457 72 320 72zM420.7 436.9C416.5 436.9 413.9 435.6 410 433.3C347.6 395.7 275 394.1 203.3 408.8C199.4 409.8 194.3 411.4 191.4 411.4C181.7 411.4 175.6 403.7 175.6 395.6C175.6 385.3 181.7 380.4 189.2 378.8C271.1 360.7 354.8 362.3 426.2 405C432.3 408.9 435.9 412.4 435.9 421.5C435.9 430.6 428.8 436.9 420.7 436.9zM447.6 371.3C442.4 371.3 438.9 369 435.3 367.1C372.8 330.1 279.6 315.2 196.7 337.7C191.9 339 189.3 340.3 184.8 340.3C174.1 340.3 165.4 331.6 165.4 320.9C165.4 310.2 170.6 303.1 180.9 300.2C208.7 292.4 237.1 286.6 278.7 286.6C343.6 286.6 406.3 302.7 455.7 332.1C463.8 336.9 467 343.1 467 351.8C466.9 362.6 458.5 371.3 447.6 371.3zM478.6 295.1C473.4 295.1 470.2 293.8 465.7 291.2C394.5 248.7 267.2 238.5 184.8 261.5C181.2 262.5 176.7 264.1 171.9 264.1C158.7 264.1 148.6 253.8 148.6 240.5C148.6 226.9 157 219.2 166 216.6C201.2 206.3 240.6 201.4 283.5 201.4C356.5 201.4 433 216.6 488.9 249.2C496.7 253.7 501.8 259.9 501.8 271.8C501.8 285.4 490.8 295.1 478.6 295.1z" />
              </svg>
            </a>
          </SocialRow>

          {/* <SubTitle>Algorithm Practice</SubTitle>
          <SubDesc>Actively practicing on LeetCode</SubDesc>
          <div style={{ width: "60%", textAlign: "center" }}>
            <img
              src="https://leetcard.jacoblin.cool/acoa?theme=light&font=Khula&ext=heatmap"
              alt="LeetCode Stats"
              style={{
                maxWidth: "100%",
                height: "auto",
                marginTop: "-12px",
              }}
            />
          </div> */}

          {/* <ResumeButton href={Bio.resume} target="_blank">
            Resume
          </ResumeButton> */}
        </GridWrapper>
      </Container>
    </div>
  );
};

export default About;
