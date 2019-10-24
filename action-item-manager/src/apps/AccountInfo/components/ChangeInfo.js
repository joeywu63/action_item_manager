import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';
import { ACCTPAGES } from '../constants';

class ChangeInfo extends React.Component {
    state = {
        value: ''
    };

    renderChangeInfoButtons = () => {
        const { handleSwitchPage } = this.props;

        return (
            <>
                <Button
                    text="Submit"
                    onClick={() => handleSwitchPage(ACCTPAGES.default)}
                />
                <Button
                    text="Cancel"
                    onClick={() => handleSwitchPage(ACCTPAGES.default)}
                />
            </>
        );
    };

    render() {
        return (
            <>
                <form>
                    <label>
                        First Name:
                        <input type="text" value={this.state.value} />
                    </label>
                </form>
                <form>
                    <label>
                        Last Name:
                        <input type="text" value={this.state.value} />
                    </label>
                </form>
                <form>
                    <label>
                        Email:
                        <input type="text" value={this.state.value} />
                    </label>
                </form>

                {this.renderChangeInfoButtons()}
            </>
        );
    }
}

ChangeInfo.propTypes = {
    handleSwitchPage: PropTypes.func.isRequired
};

export default ChangeInfo;
