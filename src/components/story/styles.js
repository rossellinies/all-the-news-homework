import styled from "styled-components";

export const Wrapper = styled.a`
  text-decoration: none;
  border-bottom: 1px dotted #00000033;
`;

export const Entry = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const StoryTitle = styled.h3`
  color: white;
  text-decoration: none;
`;

export const StoryImg = styled.img`
  width: 100%;
`;

export const StoryPara = styled.p`
  margin-top: 0;
  color: #111;
`;

export const SiteWrapper = styled.div`
  width: 94vw;
  max-width: 960px;
  margin: 24px auto;
  background: grey;
  padding: 1rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: repeat(1fr 1fr);
  grid-template-rows: repeat(1fr 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    "sectionhead sectionhead"
    "entry entry";
`;

export const PageHeader = styled.h2`
  font-family: Times New Roman;
  color: whitesmoke;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid whitesmoke;
  grid-area: sectionhead;
`;