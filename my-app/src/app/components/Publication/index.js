import React from "react";
import styled from "styled-components";
import { publications } from "../../data/constants";
import PublicationCard from "../Cards/PublicationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
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

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 24px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const index = () => {
  return (
    <Container id="publications">
      <Wrapper>
        <Title>Publications</Title>
        <Desc>
          Conducted research on <b>software vulnerabilities</b> and{" "}
          <b>mobile app security</b>, leveraging <b>large language models</b>,{" "}
          <b>developer surveys</b>, and <b>Stack Overflow analysis</b> to enhance classification accuracy,
          identify key challenges, and improve security practices.
        </Desc>

        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </Wrapper>
    </Container>
  );
};

export default index;
