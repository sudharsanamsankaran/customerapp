import React, { Component } from 'react';
import './table.css';

class Form extends Component {
    initialState = {
        name: '',
        city: '',
        phone: '',
        email:'',
    }

    state = this.initialState
    handleChange = (event) => {
        const { name, value } = event.target

        this.setState({
            [name]: value,
        })
    }
    submitForm = () => {
            this.props.handleSubmit(this.state)
            this.setState(this.initialState)
    }

    render() {
        const { name, city, phone, email } = this.state;

        return (
            <form className="mydetails">
                <label htmlFor="name">Customer Name: </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required="true"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="City">City Name: </label>
                <input
                    type="text"
                    name="city"
                    id="city"
                    required="true"
                    value={city}
                    onChange={this.handleChange} />
                <label htmlFor="phone">Contact Number: </label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    required="true"
                    value={phone}
                    onChange={this.handleChange} />
                <label htmlFor="email">E-mail Id: </label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    required="true"
                    value={email}
                    onChange={this.handleChange} />
                
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }

}

export default Form;