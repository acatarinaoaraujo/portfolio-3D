import styled from "styled-components";
import Image from "next/image";
import HeroImg from "../../../../public/images/profile.jpeg";
import { Grid } from "@mui/material";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  margin-bottom: 150px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SubDesc = styled.div`
  font-size: 15px;
  text-align: center;
  max-width: 400px;
  margin-top: 10px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;



const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;


const ImageContainer = styled.div`
  margin: 10px 20px;
  display: inline-block;
  border: 2px solid rgba(44, 43, 43, 0.1); /* Light border */
  border-radius: 2px; /* Rounded corners */
  overflow: hidden; /* Ensures the border-radius applies */
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1); /* Optional subtle shadow for depth */
`;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Title>About Me</Title>
        <Desc>
        Currently based in Hawai'i, US. 🍍🌺🌴
        </Desc>
        <Desc>
        I'm <b>open to relocating</b> to the continental U.S. to continue my journey as a software engineer. My goal is to work with a team that values <b>collaboration</b>, <b>continuous learning</b>, and the application of technology to <b>solve meaningful problems</b>.
        </Desc>
        <AboutContainer>

          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <SubDesc>
              My journey in tech started with a deep dive into computer science fundamentals during my undergraduate studies at the University of Hawai'i at Manōa. Since then, I've expanded my expertise, particularly in <b>full-stack development</b> and <b>machine learning</b>.
              </SubDesc>
              <SubDesc>
              🤖⚙️🔧🦾👩‍💻💻
              </SubDesc>
              <SubDesc>
              I've had the privilege of working on a range of exciting projects—from improving mobile app security through natural language processing to deploying machine learning models that enhance decision-making processes.
              </SubDesc>
            </Grid>
            <Grid item xs={12} sm={4}>
              <ImageContainer>
                <Image src={HeroImg} alt="hero-image" width={320} height={330} />
              </ImageContainer>
            </Grid>
            <Grid item xs={12} sm={4}>

              <SubDesc>
              <b>Languages</b>
              </SubDesc>
              <SubDesc>
              English 🇺🇸,
              Portuguese 🇧🇷,
              Spanish 🇲🇽
              </SubDesc>

              <SubDesc>
              <b>Interests & Hobbies</b>
              </SubDesc>
              <SubDesc>
              When I'm not writing code, I enjoy staying active by working out 🏋️‍♀️, cooking new dishes 🍝, and exploring different music genres 🎸.
              </SubDesc>


            </Grid>
          </Grid>


        </AboutContainer>
      </Wrapper>
    </Container>
  );
};

export default About;
