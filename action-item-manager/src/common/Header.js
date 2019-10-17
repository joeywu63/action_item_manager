import React from 'react';
import styled from 'styled-components';

const StyledBold = styled.b`
    font-size: 30px;
`;

const Header = ({ title }) => {
    return <StyledBold>{title}</StyledBold>;
};

export default Header;