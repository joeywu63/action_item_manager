import React from 'react';
import styled from 'styled-components';

import Button from 'common/Button';
import Header from 'common/Header';
import { ACCTPAGES } from '../constants';

class ChangeInfo extends React.Component {

    state = {
        value: ''
    };

    renderChangeInfoButtons = () => (
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
        return (
            <>
            <form>
                <label>
                    First Name:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>
            <form>
                <label>
                    Last Name:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>
            <form>
                <label>
                    Email:
                    <input type="text" value={this.state.value}  />
                </label>
            </form>

            {this.renderChangeInfoButtons()}
            </>
        )
    }

}

export default ChangeInfo;
