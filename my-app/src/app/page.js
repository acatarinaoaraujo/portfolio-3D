"use client";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
import ProjectDetails from "./components/ProjectDetails";
import Publication from "./components/Publication";
import styled from "styled-components";
import Header from "./components/Header";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

const Wrapper = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(110, 152, 55, 0.15) 0%,
      rgba(33, 92, 4, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(93, 22, 121, 0) 50%,
      rgba(113, 63, 137, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 98%, 0 10%);
`;

const Wrapper2 = styled.div`
  background: linear-gradient(
      38.73deg,
      rgba(101, 141, 58, 0.15) 0%,
      rgba(52, 110, 7, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(107, 154, 73, 0) 50%,
      rgba(51, 90, 6, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 0% 99%, 0% 100%, 0 60);
`;

export default function Page() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Body>
      <Header />
      <Wrapper>
        <HeroSection />
      </Wrapper>
      <Skills />
      <Wrapper2>
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Publication />
      </Wrapper2>
      <Education />
      <Wrapper>
        <Contact />
      </Wrapper>
      <Footer />
      {openModal.state && (
        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </Body>
  );
}
