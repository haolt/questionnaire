import React, { Component } from 'react';
import Input from './Input';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledRadio = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export default class Radio extends Component {
    render() {
        const { options, name } = this.props;
        return (
            <StyledRadio>
                {
                    options.map(
                     (option, key) => <Input key={key} type="radio" name={name} id={option} option={option}/>
                )
                }
            </StyledRadio>
        );
    }
}

Radio.propTypes = {
    option: PropTypes.string,
    name: PropTypes.string,
};