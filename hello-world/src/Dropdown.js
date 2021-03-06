import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }
    toggleState() {
        console.log(this);
        this.setState({ isOpened: !this.state.isOpened });
    }
    render() {
        console.log('isOpened', this.state.isOpened);
        let dropdownText;

        if (this.state.isOpened) {
            dropdownText= <div>Here is shown is dropdown</div>;
        }
        return (
            <div onClick={this.toggleState.bind(this)}>
            It's dropdown baby
            {dropdownText}
            </div>
        );
    }
}

export default Dropdown;