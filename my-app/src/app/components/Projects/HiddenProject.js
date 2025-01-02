import React from 'react';
import { Modal, Box, Typography } from '@mui/material';
import { CloseRounded } from '@mui/icons-material';
import styled from 'styled-components';
import { GitHub, LaptopMac } from '@mui/icons-material';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

const Wrapper = styled.div`
  max-width: 1100px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 12px;
`;

const Button = styled.a`
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99};
  }
`;

const HiddenProject = ({ openModal, setOpenModal }) => {
  const project = openModal?.project;
  if (!project) return null;

  return (
    <Modal open={openModal.state} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{
              position: 'absolute',
              top: '10px',
              right: '20px',
              cursor: 'pointer',
            }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Typography variant="h4">{project?.title}</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {project?.date}
          </Typography>
          <Typography variant="body1">{project?.description}</Typography>

          <Grid container spacing={2}>
            {project?.images.map((image, index) => (
              <Grid item xs={12} md={6} key={index}>
                <img src={image.url} alt={image.title} style={{ width: '100%', borderRadius: '8px' }} />
                <Typography variant="caption" display="block" color="textSecondary" align="center">
                  {image.title}
                </Typography>
              </Grid>
            ))}
          </Grid>

          <Typography variant="h6">Tags</Typography>
          <Box display="flex" flexWrap="wrap">
            {project?.tags.map((tag, index) => (
              <Box key={index} sx={{ bgcolor: 'primary.main', borderRadius: '8px', margin: '4px', padding: '4px 8px', color: 'white' }}>
                {tag}
              </Box>
            ))}
          </Box>

          <Typography variant="h6">Team Members</Typography>
          <Grid container spacing={2}>
            {project?.member.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Box textAlign="center">
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{
                      width: '70px',
                      height: '70px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: '8px',
                    }}
                  />
                  <Typography variant="body1">{member.name}</Typography>
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <GitHub />
                  </a>
                </Box>
              </Grid>
            ))}
          </Grid>

          <ButtonGroup>
            {project?.github && (
              <Button href={project.github} target="_blank">
                <GitHub />
              </Button>
            )}
            {project?.webapp && (
              <Button href={project.webapp} target="_blank">
                <LaptopMac />
              </Button>
            )}
          </ButtonGroup>
        </Wrapper>
      </Container>
    </Modal>
  );
};

export default HiddenProject;
