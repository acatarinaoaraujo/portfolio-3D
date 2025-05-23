import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { FaTools } from 'react-icons/fa'; 

const Button = styled(Link)`
    display: block; /* Ensure the button is always visible */
    width: calc(100% - 20px); /* Adjust width to fit inside the card */
    padding: 10px;
    background-color: ${({ theme }) => theme.card_light};
    color: ${({ theme }) => theme.text_black};
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.8s ease-in-out;
    text-decoration: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    margin-top: auto; /* Pushes button to the bottom */

    &:hover {
        background-color: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;

const ConstructionTag = styled.div`
    position: absolute;
    top: 12px;
    left: 12px;
    background: linear-gradient(135deg, #ffcc00, #ffdd55);
    color: #1a1a1a;
    font-size: 11px;
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
    z-index: 2;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.05);
    }

    svg {
        flex-shrink: 0;
    }
`;

const Card = styled.div`
    width: 342px;
    height: 550px;
    background-color:rgb(214, 220, 208);
    cursor: pointer;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 18px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    position: relative; /* Ensure positioning context for Button */

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
`;

const CardImageWrapper = styled.div`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 2px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
    overflow: hidden;
    display: flex;
    position: relative; /* Required for positioning the tag */
`;


const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 16};
    padding: 2px 8px;
    border-radius: 10px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const Title = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};

    @media only screen and (max-width: 768px) {
        font-size: 10px;
    }
`;

const Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Avatar = styled.img`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    margin-left: -10px;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    border: 3px solid ${({ theme }) => theme.card};
`;

const ProjectCards = ({ project, setOpenModal }) => {
    return (
        <Card onClick={() => setOpenModal({ state: true, project: project })}>
            <CardImageWrapper>
    {project.isInConstruction && (
        <ConstructionTag>
            <FaTools size={14} />
            In Construction
        </ConstructionTag>
    )}
    <Image
        src={project.image}
        alt={project.title}
        width={306}
        height={180}
    />
</CardImageWrapper>

            <Tags>
                {project.tags?.map((tag, index) => (
                    <Tag key={index}>{tag}</Tag>
                ))}
            </Tags>
            <Details>
                <Title>{project.title}</Title>
                <Date>{project.date}</Date>
                <Description>{project.description}</Description>
            </Details>
            <Members>
                {project.member?.map((member, index) => (
                    <Avatar key={index} src={member.img} alt={`Member ${index}`} />
                ))}
            </Members>
        </Card>
    );
};

export default ProjectCards;