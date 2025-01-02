'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';  // Change this line
import { Box, Grid, Typography } from '@mui/material';
import { GitHub, LaptopMac } from '@mui/icons-material';
import { projects } from '../../data/constants'; // Adjust the import according to your project structure

const Page = () => {
  const router = useRouter();
  const [project, setProject] = useState(null);

  useEffect(() => {
    console.log(router.isReady);
    if (router.isReady) {
      const { id } = router.query;
      console.log(id);
      const foundProject = projects.find((project) => project.id === parseInt(id));
      setProject(foundProject);
    }
  }, [router.isReady, router.query]);

  if (!project) return <Typography>Project not found</Typography>;

  return (
    <Box>
      <Typography variant="h3" component="div" gutterBottom>
        {project.title}
      </Typography>
      <Typography variant="body1" color="textSecondary" gutterBottom>
        {project.date}
      </Typography>
      <Typography variant="body2" color="textPrimary" gutterBottom>
        {project.description}
      </Typography>

      <Grid container spacing={2}>
        {project.images.map((image, index) => (
          <Grid item xs={12} md={6} key={index}>
            <img src={image.url} alt={image.title} style={{ width: '100%', borderRadius: '8px' }} />
            <Typography variant="caption" display="block" color="textSecondary" align="center">
              {image.title}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" component="div" gutterBottom>
        Tags
      </Typography>
      <Box display="flex" flexWrap="wrap">
        {project.tags.map((tag, index) => (
          <Box
            key={index}
            sx={{
              bgcolor: 'primary.main',
              borderRadius: '8px',
              margin: '4px',
              padding: '4px 8px',
              color: 'white',
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>

      <Typography variant="h6" component="div" gutterBottom>
        Team Members
      </Typography>
      <Grid container spacing={2}>
        {project.member.map((member, index) => (
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

      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <LaptopMac />
          </a>
        )}
        {project.webapp && (
          <a href={project.webapp} target="_blank" rel="noopener noreferrer">
            <LaptopMac />
          </a>
        )}
      </Box>
    </Box>
  );
};

export default Page;
