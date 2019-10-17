import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledDiv = styled.div`
    margin-top: 20px;
    margin-right: 20px;
    padding: 20px;
    border: 0.5px solid black;
    border-radius: 2px;
    ${props => (props.onClick ? ':hover { cursor: pointer; }' : '')}
`;

const Panel = ({ children, onClick }) => (
    <StyledDiv onClick={onClick}>{children}</StyledDiv>
);

Panel.propTypes = {
    onClick: PropTypes.func
};

Panel.defaultProps = {
    onClick: null
};

export default Panel;
