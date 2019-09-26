import styled from 'styled-components';

const StyledTextarea = styled.textarea`
resize: none;
line-height: 25px;
color: ${(props) => props.theme.textColor};
`;
export default StyledTextarea;
