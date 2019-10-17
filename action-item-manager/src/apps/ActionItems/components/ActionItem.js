import React from 'react';

import Header from 'common/Header';
import Button from 'common/Button';

class ActionItem extends React.Component {
    componentDidMount() {
        const { complete } = this.props.location.state.actionItem;
        this.setState({ complete });
    }

    state = {
        complete: false
    };

    handleMarkAsComplete = () => {
        const { complete } = this.state;

        console.log('marking complete');
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
