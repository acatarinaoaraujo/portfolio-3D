"use client";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { projects } from "../../data/constants"; // Adjust path if needed
import { GitHub, ArrowBack, ArrowForward, Home, LaptopMac } from "@mui/icons-material";
import { FaTools } from "react-icons/fa";
import { Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from '@mui/material';

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
  max-width: 1500px;
  width: 100%;
  margin: 20px 20px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.text_primary};
  padding: 40px;
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

const ConstructionTag = styled.div`
    background: linear-gradient(135deg, #ffcc00, #ffdd55);
    color: #1a1a1a;
    font-size: 11px;
    width: 170px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 6px 10px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.25);
    backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.4);
    transition: transform 0.3s ease;
    ${({ inline }) => inline && `
        position: static;
        box-shadow: none;
        padding: 4px 8px;
        font-size: 10px;
    `}

    &:hover {
        transform: scale(1.05);
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
  margin: 6px 8px 30px 8px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover; // Ensures the image covers the area without distortion
  margin-top: 10px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
`;

const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  margin: 0px 10px;
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
  margin: 0px 0px;
  gap: 0px;
`;

const StyledButtonBar = styled.a`
  width: 100%;
  display: flex;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  padding: 12px 12px;
  background-color: ${({ theme }) => theme.primary};
  ${({ $dull, theme }) =>
    $dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${theme.bg + 99} !important;
        }
    `}
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;
  &:hover {
    background-color: ${({ theme }) => theme.primary + 99} !important;
  }
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const StyledButton = styled.a`
  //width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary + 80};
  padding: 6px 14px;
  background-color: ${({ theme }) => theme.primary + 50};
  ${({ $dull, theme }) =>
    $dull &&
    `
        background-color: ${theme.bgLight};
        color: ${theme.text_secondary};
        &:hover {
            background-color: ${({ theme }) => theme.bg + 99} ;
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

const Button = ({ $dull, ...props }) => {
  const [isButtonMounted, setIsButtonMounted] = useState(false);

  useEffect(() => {
    setIsButtonMounted(true);
  }, []);

  return <StyledButton {...props} $dull={isButtonMounted && $dull} />;
};

const ButtonBar = ({ $dull, ...props }) => {
  const [isButtonBarMounted, setIsButtonBarMounted] = useState(false);

  useEffect(() => {
    setIsButtonBarMounted(true);
  }, []);

  return <StyledButtonBar {...props} $dull={isButtonBarMounted && $dull} />;
};

const MemberGrid = ({ members }) => (
  <Box>
    <SubTitle>Members</SubTitle>
    <Grid container spacing={2}>
      {members.map((member, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
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

const Navbar = ({ project }) => {
  const currentId = parseInt(project.id);
  const totalProjects = projects.length - 1;
  const prevProjectId = currentId === 0 ? totalProjects : currentId - 1;
  const nextProjectId = currentId === totalProjects ? 0 : currentId + 1;

  return (
    <Grid container justifyContent="space-between" alignItems="center" mb={2}>
      <Grid item>
        <ButtonBar
          $dull={true}
          href={`/projects/${prevProjectId}`}
          target="new"
        >
          <ArrowBack /> Prev
        </ButtonBar>
      </Grid>

      <Grid item>
        <ButtonBar $dull={true} href={"/"} target="new">
          <Home />
        </ ButtonBar>
      </Grid>

      <Grid item>
        <ButtonBar
          $dull={true}
          href={`/projects/${nextProjectId}`}
          target="new"
        >
          Next <ArrowForward />
        </ButtonBar>
      </Grid>
    </Grid>
  );
};



const Page = () => {
  const { id } = useParams();
  const project = projects.find((project) => project.id === parseInt(id));

  if (!project) return <Typography>Project not found</Typography>;

  return (
    <Container>
      <Wrapper>
        <Navbar project={project} />
        <ButtonGroup>

{project?.github && project.github.trim() && (
  <Button $dull={false} href={project.github} target="new" style={{ display: 'flex', alignItems: 'center' }}>
GitHub
<GitHub style={{ marginLeft: '8px' }} />
</Button>
)}

{project?.webapp && project.webapp.trim() && (
<Button $dull={false} href={project.webapp} target="new" style={{ display: 'flex', alignItems: 'center' }}>
WebApp
<LaptopMac style={{ marginLeft: '8px' }} />
</Button>
)}

</ButtonGroup>


    <Title>{project?.title}</Title>
    {project?.isInConstruction && (
        <ConstructionTag inline>
            <FaTools size={12} />
            Under Construction
        </ConstructionTag>
    )}


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
<br/>
{/* Table with key details */}
{project.keyDetails && Object.keys(project.keyDetails).length > 0 &&  (
  <Grid item xs={12} md={8}>
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Key Detail</strong></TableCell>
            <TableCell><strong>Details</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* Goals */}
          {project.keyDetails.goals.length > 0 && (
            <TableRow>
              <TableCell rowSpan={project.keyDetails.goals.length}><strong>Goal</strong></TableCell>
              <TableCell>{project.keyDetails.goals[0]}</TableCell>
            </TableRow>
          )}
          {project.keyDetails.goals.slice(1).map((goal, index) => (
            <TableRow key={`goal-${index}`}>
              <TableCell>{goal}</TableCell>
            </TableRow>
          ))}

          {/* Key Achievements */}
          {project.keyDetails.keyAchievements.length > 0 && (
            <TableRow>
              <TableCell rowSpan={project.keyDetails.keyAchievements.length}><strong>Key Achievement</strong></TableCell>
              <TableCell>{project.keyDetails.keyAchievements[0]}</TableCell>
            </TableRow>
          )}
          {project.keyDetails.keyAchievements.slice(1).map((achievement, index) => (
            <TableRow key={`achievement-${index}`}>
              <TableCell>{achievement}</TableCell>
            </TableRow>
          ))}

          {/* Results */}
          {project.keyDetails.results.length > 0 && (
            <TableRow>
              <TableCell rowSpan={project.keyDetails.results.length}><strong>Result</strong></TableCell>
              <TableCell>{project.keyDetails.results[0]}</TableCell>
            </TableRow>
          )}
          {project.keyDetails.results.slice(1).map((result, index) => (
            <TableRow key={`result-${index}`}>
              <TableCell>{result}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Grid>
)}

        {project?.member && <MemberGrid members={project.member} />}

      </Wrapper>
    </Container>
  );
};

export default Page;
