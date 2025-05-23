import Link from 'next/link'; // Use Next.js Link instead
import styled from 'styled-components';

export const Nav = styled.div`
    background-color: white;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin: 0;

    padding: 0;
    box-sizing: border-box; /* Include padding in the height */
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width: 100%;
    padding: 0 20px;
    max-width: 1400px;
`;

export const NavLogo = styled(Link)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0;
    }
`;

export const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

export const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 54px; 
    padding: 0 6px;
    list-style: none;
    white-space: nowrap; /* Prevents text from wrapping */
    flex-wrap: nowrap; /* Ensures everything stays in one line */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;


export const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 400;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
        font-weight: 600;
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const GitHubButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 90%;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 400;
    text-decoration: none;
    margin-right: 4px;
    font-size: 14px;
    transition: all 0.6s ease-in-out;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const LinkedInButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 400;
    text-decoration: none;
    font-size: 14px;
    transition: all 0.6s ease-in-out;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;


export const ButtonContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 0 6px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.5rem;
        cursor: pointer;
        color: ${({ theme }) => theme.text_primary};
    }
`;

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

export const MobileMenuItems = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;
    list-style: none;
    width: 100%;
    height: 100%;
`;

export const MobileMenuLink = styled(Link)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileMenuButton = styled.a`
    border: 1.8px solid ${({ theme }) => theme.primary};
    justify-content: center;
    display: flex;
    align-items: center;
    height: 70%;
    border-radius: 20px;
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    padding: 0 20px;
    font-weight: 500;
    text-decoration: none;
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    &:hover {
        background: ${({ theme }) => theme.primary};
        color: ${({ theme }) => theme.white};
    }
`;

export const MobileLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
        color: ${({ theme }) => theme.primary};
    }
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

export const MobileNavLogo = styled(Link)`
    width: 80%;
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
        padding: 0;
    }
`;
