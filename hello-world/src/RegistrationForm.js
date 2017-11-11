import React, { Component } from 'react';


class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state={
            email: ''
        }
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log('form is submited');
    }
    handleEmailChange(event) {
        console.log('form is submited', event.target.value);
        this.setState({email: event.target.value});
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <input 
      type="text"
       placeholder="E-mail"
       value={this.state.email} 
       onChange={this.handleEmailChange}
       />
       <button>Save</button>
      </form>
    );
  }
}

export default RegistrationForm;
