'use client';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';
import ProjectDetails from './components/ProjectDetails';
// import Blog from './components/Blog/Blog'; // Import Blog if needed
// import BlogPostPage from './components/Blog/BlogPostPage'; // Import BlogPostPage if needed
import styled from 'styled-components';

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  padding-top: 20px;
`;

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`;

const Wrapper2 = styled.div`
  background: linear-gradient(to top, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 1) 100%),
              linear-gradient(38.73deg, rgba(204, 0, 187, 0.3) 0%, rgba(201, 32, 184, 0) 50%),
              linear-gradient(141.27deg, rgba(0, 70, 209, 0.1) 50%, rgba(0, 70, 209, 0.3) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const Wrapper3 = styled.div`
  background: linear-gradient(to top, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 1) 100%),
              linear-gradient(38.73deg, rgba(204, 0, 187, 0.3) 0%, rgba(201, 32, 184, 0) 50%),
              linear-gradient(141.27deg, rgba(0, 70, 209, 0.1) 50%, rgba(0, 70, 209, 0.3) 100%);
  width: 100%;
`;

const Wrapper4 = styled.div`
  background: linear-gradient(to top, rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 1) 100%),
  linear-gradient(38.73deg, rgba(204, 0, 187, 0.3) 0%, rgba(201, 32, 184, 0) 50%),
  linear-gradient(141.27deg, rgba(0, 70, 209, 0.1) 50%, rgba(0, 70, 209, 0.3) 100%);
  width: 100%;
`;

export default function Page() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Body>
      <Wrapper2>
        <HeroSection />
      </Wrapper2>
      <Wrapper>
        <Skills />
        <Experience />
      </Wrapper>
      <Projects openModal={openModal} setOpenModal={setOpenModal} />
      <Wrapper>
        <Education />
        <Contact />
      </Wrapper>
      <Footer />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Body>
  );
}
