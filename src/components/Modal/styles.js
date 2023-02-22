import styled from "styled-components";

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000 !important;
  div.close{ 
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .7)
  }
`
export const Content = styled.div`
  width: auto;
  background: white;
  padding: 2rem;
  border-radius: 1rem;
  background: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
