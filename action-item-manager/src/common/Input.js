import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { COLOURS } from 'utils/constants';

const StyledLabel = styled.label`
    font-weight: bold;
    font-size: 20px;
    width: 520px;
    display: flex;
    justify-content: space-between;
`;

const StyledInput = styled.input`
    border-radius: 5px;
    border-color: ${COLOURS.darkPrimary};
    border-width: 1px;
    width: 400px;
    height: ${props => props.type === 'date' ? '22px' : '20px'};
`;

class Input extends React.Component {
    render() {
        const {
            label,
            handleChange,
            name,
            value,
            type,
            placeholder
        } = this.props;

        return (
            <StyledLabel>
                {label}
                <StyledInput
                    name={name}
                    value={value}
                    type={type}
                    placeholder={placeholder}
                    onChange={handleChange}
                />
            </StyledLabel>
        );
    }
}

Input.propTypes = {
    label: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

Input.defaultProps = {
    placeholder: ''
};

export default Input;
