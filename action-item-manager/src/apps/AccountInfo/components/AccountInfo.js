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

const ProfileLine = styled.div`
    margin-top: 5px;
    margin-bottom: 10px;
`;

const StyledButton = styled(Button)`
    margin-left: 10px;
`;

class AccountInfo extends React.Component {
    state = {
        currentUser: getCurrentUser(),
        page: ACCTPAGES.default
    };

    handleSwitchPage = page => {
        this.setState({ page });
    };

    renderAccountInfo = () => {
        const { firstName, lastName, email, role } = this.state.currentUser;
        return (
            <>
                <SidebarWrapper />
                <Header title="Account Info" />
                <ProfileLine>First Name: {firstName}</ProfileLine>
                <ProfileLine>Last Name: {lastName}</ProfileLine>
                <ProfileLine>Email: {email}</ProfileLine>
                <ProfileLine>Role: {ROLENAMES[role]}</ProfileLine>
                <Button
                    text="Edit Password"
                    onClick={() =>
                        this.handleSwitchPage(ACCTPAGES.changepassword)
                    }
                />
                <StyledButton
                    text="Edit Profile"
                    onClick={() => this.handleSwitchPage(ACCTPAGES.changeinfo)}
                />
            </>
        );
    };

    render() {
        const { page, currentUser } = this.state;
        return (
            <>
                {page === ACCTPAGES.default ? (
                    this.renderAccountInfo()
                ) : page === ACCTPAGES.changepassword ? (
                    <ChangePassword handleSwitchPage={this.handleSwitchPage} />
                ) : page === ACCTPAGES.changeinfo ? (
                    <ChangeInfo handleSwitchPage={this.handleSwitchPage} currentUser={currentUser} />
                ) : null}
            </>
        );
    }
}

export default AccountInfo;
