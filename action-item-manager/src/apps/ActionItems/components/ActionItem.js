import React from 'react';

import Header from 'common/Header';
import Button from 'common/Button';

import { toggleActionItemComplete, didComplete } from '../repository';
import { getCurrentUser } from 'utils/currentUser';

class ActionItem extends React.Component {
    componentDidMount() {
        const { actionItemID } = this.props.location.state.actionItem;
        const { currentUser } = this.state;

        const complete = didComplete({ userID: currentUser.id, actionItemID });
        this.setState({ complete });
    }

    state = {
        currentUser: getCurrentUser(),
        complete: false
    };

    handleMarkAsComplete = async () => {
        const { actionItemID } = this.props.location.state.actionItem;
        const { complete, currentUser } = this.state;

        await toggleActionItemComplete({ userID: currentUser.id, isComplete: !complete, actionItemID });
        this.setState({ complete: !complete });
    };

    render() {
        const {
            actionItemID,
            title,
            description
        } = this.props.location.state.actionItem;
        const { complete } = this.state;

        return (
            <>
                <Header title={title} />
                <div>{description}</div>
                <Button
                    text={complete ? 'Mark as Incomplete' : 'Mark as Complete'}
                    onClick={this.handleMarkAsComplete}
                />
            </>
        );
    }
}

export default ActionItem;
