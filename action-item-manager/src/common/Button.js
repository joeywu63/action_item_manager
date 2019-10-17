import React from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
    render() {
        const { text, onClick } = this.props;

        return <button onClick={onClick}>{text}</button>
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;