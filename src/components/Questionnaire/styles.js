import styled from 'styled-components';

export const StyledApp = styled.div`
  background: #fff;
  padding: 2em;
  margin: 0 10%;
  box-shadow: 0 0 20px #0000002e;
`;

export const StyleQuestionnaire = styled.div`
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
  };
  :disabled {
    opacity: 0.6;
  }
  :disabled:hover {
    background: #2980b9;
    color: #fff;
  }
`;
