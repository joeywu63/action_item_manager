import React from 'react';
import PropTypes from 'prop-types';

import Button from 'common/Button';

import { assignActionItem } from '../repository';

class CreateActionItem extends React.Component {
    state = {
        title: '',
        description: '',
        dueDate: ''
    };

    handleChange = e => {
        const key = e.target.getAttribute('name');
        this.setState({
            [key]: e.target.value
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        const { handleGoBack, teamID } = this.props;
        const { title, description, dueDate } = this.state;

        await assignActionItem({ teamID, title, description, dueDate });
        handleGoBack();
    };

    render() {
        const { handleGoBack } = this.props;
        const { title, description, dueDate } = this.state;

        return (
            <div>
                <Button text="Back" onClick={handleGoBack} />
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Title:
                        <input
                            name="title"
                            type="text"
                            value={title}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Description:
                        <textarea
                            name="description"
                            value={description}
                            onChange={this.handleChange}
                        />
                    </label>
                    <label>
                        Due Date:
                        <input
                            name="dueDate"
                            type="date"
                            value={dueDate}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Assign Action Item to Team" />
                </form>
            </div>
        );
    }
}

CreateActionItem.propTypes = {
    handleGoBack: PropTypes.func.isRequired,
    teamID: PropTypes.number.isRequired
};

export default CreateActionItem;
