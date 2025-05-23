import React from "react";
import { useState } from "react";
import {
  Container,
  Wrapper,
  Title,
  Desc,
  CardContainer,
  ToggleButtonGroup,
  ToggleButton,
  Divider,
} from "./ProjectsStyle";
import ProjectCard from "../Cards/ProjectCards";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState("all");
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          Over the past few years, I&apos;ve had the opportunity to work on a
          diverse range of projects, including <b>application development</b>,{" "}
          <b>machine learning</b> and <b>data science</b>. Here are some of the
          projects I&apos;ve contributed to.
        </Desc>
        <ToggleButtonGroup>
          {toggle === "all" ? (
            <ToggleButton $active={true} value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}
          <Divider />
          {toggle === "web app" ? (
            <ToggleButton
            $active={true}

              value="web app"
              onClick={() => setToggle("web app")}
            >
              Applications
            </ToggleButton>
          ) : (
            <ToggleButton value="web app" onClick={() => setToggle("web app")}>
              Applications
            </ToggleButton>
          )}
          <Divider />
          {toggle === "ml" ? (
            <ToggleButton $$active={true} value="ml" onClick={() => setToggle("ml")}>
              Machine Learning & Data Science
            </ToggleButton>
          ) : (
            <ToggleButton value="ml" onClick={() => setToggle("ml")}>
              Machine Learning & Data Science
            </ToggleButton>
          )}
        </ToggleButtonGroup>


        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
