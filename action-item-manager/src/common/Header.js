import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { COLOURS } from 'utils/constants';

const StyledBold = styled.b`
    font-size: ${props => `${props.size}px`}
    color: ${COLOURS.darkPrimary};
`;

const Header = ({ title, size }) => {
    switch (size) {
        case 'small':
            size = '15';
            break;
        case 'medium':
            size = '20';
            break;
        case 'large':
            size = '30';
    }

    return <StyledBold size={size}>{title}</StyledBold>;
};

Header.propTypes = {
    size: PropTypes.string
};

Header.defaultProps = {
    size: 'large'
};

export default Header;
