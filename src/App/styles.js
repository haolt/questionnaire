import styled from 'styled-components';

export const StyledApp = styled.div`
background: #fff;
padding: 2em;
margin: 0 10%;
box-shadow: 0 0 20px #0000002e;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 1.3rem;
  padding: 0.5em;
  margin: 0;
  background: #2980b9;
  position: relative;
  letter-spacing: 1px;
  font-style: italic;
  overflow: hidden;
  ::after {
    content: "";
    height: 3em;
    width: 3em;
    background: #fff;
    position: absolute;
    right: -51px;
    top: -7px;
    transform: rotate(45deg);
  }
`;
