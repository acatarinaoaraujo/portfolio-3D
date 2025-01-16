import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
} from "./HeroStyle";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import Image from "next/image";
import HeroImg from "../../../../public/images/profile.jpeg";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import styled from "styled-components";

const ImageContainer = styled.div`
  display: inline-block;
  border: 2px solid rgba(44, 43, 43, 0.1); /* Light border */
  border-radius: 2px; /* Rounded corners */
  overflow: hidden; /* Ensures the border-radius applies */
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1); /* Optional subtle shadow for depth */
`;

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>Hi, I am {Bio.name}</Title>
            <TextLoop>
              I am a
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
            <SubTitle>{Bio.description}</SubTitle>
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "left",
                alignItems: "center",
                marginTop: "-40px",
                marginBottom: "10px",
              }}
            >
              <a
                href={`mailto:${Bio.email}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <EmailIcon fontSize="large" />
              </a>
              <a
                href={Bio.github}
                target="display"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <GitHubIcon fontSize="large" />
              </a>
              <a
                href={Bio.linkedin}
                target="display"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <LinkedInIcon fontSize="large" />
              </a>
              <a
                href={Bio.leetcode}
                target="display"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/0a/LeetCode_Logo_black_with_text.svg" // Replace with the actual image URL
                  alt="LeetCode"
                  style={{ width: "110px", height: "110px" }} // Adjust dimensions as needed
                />
              </a>
            </div>

            <ResumeButton href={Bio.resume} target="display">
              Resume
            </ResumeButton>
          </HeroLeftContainer>

          {/* <HeroRightContainer id="Right">
            <ImageContainer>
              <Image src={HeroImg} alt="hero-image" width={420} height={430} />
            </ImageContainer>
          </HeroRightContainer> */}
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
