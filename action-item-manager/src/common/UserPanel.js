import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';

class UserPanel extends React.Component {
    render() {
        const { user, handleRemoveUser } = this.props;

        return (
            <div>
                {user.firstName}
                {user.lastName}
                <Button text="remove" onClick={handleRemoveUser} />
            </div>
        );
    }
}

UserPanel.propTypes = {
    user: PropTypes.object.isRequired,
    handleRemoveUser: PropTypes.func.isRequired
};

export default UserPanel;
