import styled from "styled-components";

export const Entry = styled.nav`
background: grey;
width: 100%;
transition: all 0.5s;
position: sticky;
top: 0;
`;

export const NavUl = styled.ul`
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
`;

export const NavA = styled.a`
text-decoration: none;
display: inline-block;
color: white;
text-transform: capitalize;
font-weight: 700;
padding: 0.75rem 1.5rem;
`;

export const NavAActive = styled.div`
box-shadow: inset 0 0 0 2px white;
border-radius: 5px;
`;

export const NavHover = styled.div`
box-shadow: inset 0 0 0 2px white;
border-radius: 6px;
background-color: black;
`;

export const NavImg = styled.img`
    width: 100%;
`;
  
export const NavLi = styled.li`
    overflow: hidden;
`;
  
export const NavLogoImg = styled.img`
    width: 3rem;
    height: 3rem;
`;