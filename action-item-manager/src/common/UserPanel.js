import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';

class UserPanel extends React.Component {
    render() {
        const { user } = this.props;

        return (
            <div>
                {user.firstName}
                {user.lastName}
                <Button text="remove" onClick={() => console.log('removing user')} />
            </div>
        );
    }
}

UserPanel.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserPanel;
