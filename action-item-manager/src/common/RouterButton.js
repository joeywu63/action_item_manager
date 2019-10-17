import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled.button`
    width: 100%;
`;

class RouterButton extends React.Component {
    render() {
        const { link, title } = this.props;

        return (
            <Link to={link}>
                <StyledButton>{title}</StyledButton>
            </Link>
        );
    }
}

RouterButton.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default RouterButton;
