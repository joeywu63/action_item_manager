import React from 'react';
import styled from 'styled-components';

import { getCurrentUser } from 'utils/currentUser';
import { ACCTPAGES, ROLENAMES } from '../constants';
import Button from 'common/Button';
import Header from 'common/Header';
import ChangeInfo from './ChangeInfo';
import ChangePassword from './ChangePassword';

const SidebarWrapper = styled.div`
    margin-right: auto;
`;

const Title = styled.div`
    margin-right: auto;
`;

class AccountInfo extends React.Component {
    state = {
        currentUser: getCurrentUser(),
        page: ACCTPAGES.default
    };

    handleSwitchPage = page => {
        this.setState({ page });
    };

    getRole = role => {
        return ROLENAMES[role];
    };

    renderAccountInfo = () => {
        const { firstName, lastName, email, role } = this.state.currentUser;
        return (
            <>
                <SidebarWrapper />
                <Header title="Account Info" />
                First Name: {firstName}
                Last Name: {lastName}
                Email: {email}
                Role: {this.getRole(role)}
                <Button
                    text="Edit Password"
                    onClick={() =>
                        this.handleSwitchPage(ACCTPAGES.changepassword)
                    }
                />
                <Button
                    text="Edit Profile"
                    onClick={() => this.handleSwitchPage(ACCTPAGES.changeinfo)}
                />
            </>
        );
    };

    render() {
        const { page } = this.state;
        return (
            <>
                {page === ACCTPAGES.default ? (
                    this.renderAccountInfo()
                ) : page === ACCTPAGES.changepassword ? (
                    <ChangePassword handleSwitchPage={this.handleSwitchPage}/>
                ) : page === ACCTPAGES.changeinfo ? (
                    <ChangeInfo handleSwitchPage={this.handleSwitchPage}/>
                ) : null}
            </>
        );
    }
}

export default AccountInfo;
