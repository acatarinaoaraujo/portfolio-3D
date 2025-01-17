import ThreeAnimation from "../ThreeAnimation";
import styled from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0; /* Ensure no margin */
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;


const HeroSection = () => {
  return (
      <HeroContainer>
        {/* <ThreeAnimation /> */}
      </HeroContainer>
  );
};

export default HeroSection;
