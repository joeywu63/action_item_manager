import React from 'react';

import ActionItemPanel from './ActionItemPanel';

import PageWrapper from 'common/PageWrapper';
import Header from 'common/Header';
import LoadingIndicator from 'common/LoadingIndicator';

import { getActionItems } from '../repository';

class ActionItemList extends React.Component {
    async componentDidMount() {
        const actionItems = await getActionItems();
        this.setState({ loading: false, actionItems });
    }

    state = {
        loading: true,
        actionItems: []
    };

    renderActionItems = () => {
        const { actionItems } = this.state;

        return actionItems.map(actionItem => (
            <ActionItemPanel
                key={actionItem.actionItemID}
                actionItem={actionItem}
            />
        ));
    };

    render() {
        const { loading } = this.state;

        return (
            <PageWrapper>
                <Header title="My Action Items" />
                {loading ? <LoadingIndicator /> : this.renderActionItems()}
            </PageWrapper>
        );
    }
}

export default ActionItemList;
