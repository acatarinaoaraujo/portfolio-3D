import styled from 'styled-components';
import _default from '../../themes/default';

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  padding: 0 30px;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 0; /* Ensure no margin */
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

export const Wrapper = styled.div`
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
  max-width: 500px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const SubTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  max-width: 400px;
  margin-bottom: -10px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export const Img = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 640px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 500;
  font-size: 18px;
  display: flex;
  gap: 6px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 960px) {
    text-align: center;
  }
  @media (max-width: 640px) {
    font-size: 18px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
`;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 50%;
    max-width: 120px;
    text-align: center;
    padding: 14px 0;
    margin-top: 10px;
    color: ${({ theme }) => theme.white};

    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.2s ease-in-out !important;
    background: linear-gradient(225deg,rgb(70, 72, 166) 0%,rgb(134, 148, 164) 100%);
    box-shadow: 5px 5px 15px rgba(119, 158, 203, 0.3), /* Dark Pastel Blue shadow */
                -5px -5px 15px rgba(119, 158, 203, 0.3); /* Dark Pastel Blue shadow */
    &:hover {
        transform: scale(1.05);
        transition: all 0.4s ease-in-out;
        box-shadow: 5px 5px 10px rgba(119, 158, 203, 0.3), /* Dark Pastel Blue shadow */
                    -5px -5px 10px rgba(119, 158, 203, 0.3); /* Dark Pastel Blue shadow */
        filter: brightness(1.1); /* Slightly increase brightness on hover */
    }

    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    }
`;
