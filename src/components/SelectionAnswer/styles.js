import styled from 'styled-components';

const StyledSelect = styled.select`
  border: 1px solid #00000024;
  border-radius: 2px;
  height: 3em;
  padding: 5px;
  font-size: 0.9em;
  color: ${(props) => props.theme.textColor};
  outline: none;
  :hover,
  :focus {
    outline: none;
  }
`;
export default StyledSelect;
