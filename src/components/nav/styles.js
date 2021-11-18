import styled from "styled-components";

export const NavMenu = styled.nav`
background: grey;
width: 100%;
transition: all 0.5s;
position: sticky;
top: 0;

ul {
list-style: none;
display: flex;
justify-content: space-around;
align-items: center;
}

a {
text-decoration: none;
display: inline-block;
color: white;
text-transform: capitalize;
font-weight: 700;
padding: 0.75rem 1.5rem;
}

a.active {
box-shadow: inset 0 0 0 2px white;
border-radius: 5px;
}

a:not(.active):hover {
box-shadow: inset 0 0 0 2px white;
border-radius: 6px;
background-color: black;
}

img {
    width: 100%;
  }
  
li.logo {
    overflow: hidden;
  }
  
li.logo img {
    width: 3rem;
    height: 3rem;
  } 
`;