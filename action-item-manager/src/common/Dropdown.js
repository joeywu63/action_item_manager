import React from 'react';
import Select from 'react-select';

class Dropdown extends React.Component {
    render() {
        const { placeholder, value, onChange, options } = this.props;

        return (
            <Select
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                options={options}
            />
        );
    }
}

export default Dropdown;
