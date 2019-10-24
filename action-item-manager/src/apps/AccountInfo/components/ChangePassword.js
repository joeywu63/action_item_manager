import React from 'react';
import styled from 'styled-components';

import Button from 'common/Button';
import Header from 'common/Header';
import { ACCTPAGES } from '../constants';
import AccountInfo from './AccountInfo';

class ChangePassword extends React.Component {

    state = {
        value: ''
    };

    handleSwitchPage = page => {
        this.setState({ page });
    };

    renderChangePasswordButtons = () => (
        <>
            <Button
                text="Submit"
                onClick={() => this.handleSwitchPage(ACCTPAGES.default)}
            />
            <Button
                text="Cancel"
                onClick={() => this.handleSwitchPage(ACCTPAGES.default)}
            />
        </>
    );

    render() {
        const { page } = this.state;

        return (
            <>
            <form>
                <label>
                    New Password:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>

            {this.renderChangePasswordButtons()}

            {page === ACCTPAGES.default
                    ? < AccountInfo />
            : null
            }
            </>

        )
    }

}

export default ChangePassword;
