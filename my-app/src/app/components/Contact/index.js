import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  text-align: center;
`;

const SectionText = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-top: 10px;
`;

const ContactInfoUpperContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const ContactLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <SectionText>Get in Touch with Me!</SectionText>
      <ContactInfoUpperContainer>
        <ContactInfoContainer>
          <Icon src="https://imaginethatcreative.net/blog/wp-content/uploads/2023/06/2250206.png" alt="Email icon" />
          <p><ContactLink href="mailto:manaswini.vadrevu@gmail.com">manaswini.vadrevu@gmail.com</ContactLink></p>
        </ContactInfoContainer>
        <ContactInfoContainer>
          <Icon src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="LinkedIn icon" />
          <p><ContactLink href="https://www.linkedin.com/in/lalitha-vadrevu">LinkedIn</ContactLink></p>
        </ContactInfoContainer>
      </ContactInfoUpperContainer>
    </Section>
  );
};

export default Contact;
