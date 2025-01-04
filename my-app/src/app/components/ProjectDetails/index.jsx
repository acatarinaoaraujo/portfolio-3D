import { CloseRounded, GitHub, LaptopMac } from "@mui/icons-material";
import { Modal, Box, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #000000a7;
  display: flex;
  align-items: top;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0px 6px;
  }
`;

const SubTitle = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin: 18px 6px 14px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin: 6px 6px 0px 6px;
  }
`;

const SubSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px 0px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 6px 6px 0px 6px;
  }
`;

const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  margin: 8px 6px;
  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin-top: 30px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin: 4px 2px;
  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0px;
  @media only screen and (max-width: 600px) {
    margin: 4px 0px;
  }
`;

const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  background-color: ${({ theme }) => theme.primary + 20};
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0px;
  gap: 12px;
`;

const Button = styled.a`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  background-color: ${({ theme }) => theme.primary};
  ${({ dull, theme }) =>
    dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99};
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const MemberGrid = ({ members }) => (
  <Box>
    <SubTitle variant="h6" component="div" gutterBottom>
      Members
    </SubTitle>
    <Grid container spacing={2}>
      {members.map((member, index) => (
        <Grid item xs={12} sm={2} key={index}>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <img
              src={member.img}
              alt={member.name}
              style={{
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "10px",
              }}
            />
            <SubSubTitle>{member.name}</SubSubTitle>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                color: "inherit",
                marginTop: "4px",
              }}
            >
              <GitHub />
            </a>
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const index = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  return (
    <Modal
      open={true}
      onClose={() => setOpenModal({ state: false, project: null })}
    >
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: "absolute",
              top: "10px",
              right: "20px",
              cursor: "pointer",
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />

          <Title>{project?.title}</Title>

          <Date>{project.date}</Date>
          <Tags>
            {project?.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Tags>

          <Desc>{project?.description}</Desc>

          {project.images && (
            <Grid container spacing={4}>
              {project.images.map((image, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Image
                    src={`../../../../images/${image.url}`}
                    alt={image.title}
                  />
                  <Label>{image.title}</Label>
                </Grid>
              ))}
            </Grid>
          )}

          {project?.member && <MemberGrid members={project.member} />}
          <ButtonGroup>
            {project?.github && project.github.trim() && (
              <Button dull href={project.github} target="new">
                <GitHub />
              </Button>
            )}
            {project?.webapp && project.webapp.trim() && (
              <Button dull href={project.webapp} target="new">
                <LaptopMac />
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default index;
