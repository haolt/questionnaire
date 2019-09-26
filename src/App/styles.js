import styled from "styled-components";

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

export const StyledApp = styled.div`
  background: #fff;
  padding: 2em;
  margin: 0 10%;
  box-shadow: 0 0 20px #0000002e;
`;

export const Questionnaire = styled.div`
  padding: 1em 0;
`;

export const Button = styled.button`
  padding: 0.7em 2em;
  background: #2980b9;
  color: #fff;
  border: 2px solid #2980b9;
  border-radius: 30px;
  transition: 0.25s;
  font-size: 0.9em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  :hover {
    background: #fff;
    color: #2980b9;
    border: 2px solid #2980b9;
    transition: 0.25s;
    outline: none;
  }
`;