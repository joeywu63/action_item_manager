import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {getIsAdmin} from 'utils/currentUser'

const StyledButton = styled.button`
    width: 100%;
    color: white;
    padding: 16px;
    text-decoration: none;
    display: inline-block;
    background-color: #4bc970;
    margin-bottom: 1em;
    visibility: ${props => (!getIsAdmin() && props.title.includes("Admin") ? "hidden" : "visible")};
`;

class RouterButton extends React.Component {
    render() {
        const { link, title } = this.props;
        const shouldNotBeRendered = !getIsAdmin() && this.props.title.includes("Admin");
        if (shouldNotBeRendered) {
            return (
                <StyledButton link={link} title={title} disabled ></StyledButton>
            );
        }
        else {
            return (
                <Link to={link}>
                    <StyledButton title={title}>{title}</StyledButton>
                </Link>
            );
        }   
    }
}

RouterButton.propTypes = {
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default RouterButton;
