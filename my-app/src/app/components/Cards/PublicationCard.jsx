import { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Grid } from "@mui/material";
import { Link } from "@mui/icons-material";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  margin-top: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Span = styled.span`
  overflow: hidden;
  display: -webkit-box;
  max-width: 100%;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
`;

const Card = styled.div`
  width: 900px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }
  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  &:hover ${Document} {
    display: flex;
  }

  &:hover ${Span} {
    overflow: visible;
    -webkit-line-clamp: unset;
  }
  border: 0.1px solid #854ce6;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  width: 100%;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Journal = styled.div`
  font-size: 14px;
  font-weight: 300;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 180px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0 16px 2px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  display: flex;
`;

const Keywords = styled.div`
  font-weight: 500;
  width: 100%;
  display: flex;
  gap: 6px;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const Keyword = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const StyledButton = styled.a`
  width: 80px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-top: 8px;
  color: ${({ theme }) => theme.text_primary};
  padding: 6px 6px;
  background-color: ${({ theme }) => theme.primary};
  ${({ $dull, theme }) =>
    $dull &&
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

const Button = ({ $dull, ...props }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return <StyledButton {...props} $dull={isMounted && $dull} />;
};

const PublicationCard = ({ publication }) => {
  console.log(publication.image);
  return (
    <Card>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardImageWrapper>
            <Image src={publication.image} alt={publication.id} />
          </CardImageWrapper>
        </Grid>
        <Grid item xs={8}>
          <Box>
            <Top>
              <Body>
                <Name>{publication.title}</Name>
                <Journal>{publication.journal}</Journal>

                <Description>
                  <Keywords>
                    Keywords:
                    <ItemWrapper>
                      {publication.tags.map((tag, index) => (
                        <Keyword key={index}>• {tag}</Keyword>
                      ))}
                    </ItemWrapper>
                  </Keywords>
                </Description>

                <Button $dull={true} href={publication.webapp} target="new">
                  <Link color="secondary" />
                </Button>
              </Body>
            </Top>
          </Box>
        </Grid>
      </Grid>
      <Description>
        <Span>{publication.description}</Span>
      </Description>
    </Card>
  );
};

export default PublicationCard;
