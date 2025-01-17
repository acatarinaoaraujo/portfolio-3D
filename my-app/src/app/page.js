"use client";
import { useState } from "react";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
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
import Awards from "./components/Awards";
import Navbar from "./components/Navbar";

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
      rgba(184, 192, 170, 0.3) 20%,
      rgba(100, 119, 67, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(207, 193, 213, 0) 100%,
      rgba(152, 102, 177, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 0% 99%, 0% 100%, 0 60);
`;

export default function Page() {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

  return (
    <Body>
      <Navbar />

      <Wrapper>
        <HeroSection />
        <About />
      </Wrapper>
      <Skills />
      <Wrapper2>
        <Experience />
        <Projects openModal={openModal} setOpenModal={setOpenModal} />
        <Publication />
        <Awards />
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
