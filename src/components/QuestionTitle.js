import styled from 'styled-components';

const QuestionTitle = styled.h5`
    padding-bottom: .5em;
    color: ${props => props.theme.titleColor};
    font-size: .9em;
    margin: .5em 0;
`;

export default QuestionTitle;