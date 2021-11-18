import styled from "styled-components";

export const Loading = styled.a`
    position: absolute;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  
export const Entry = styled.div`
    width: 90px;
    height: 90px;
    overflow: hidden;
    background: url("../img/spinner.svg") 50% 50% no-repeat;
    background-size: cover;
  `;