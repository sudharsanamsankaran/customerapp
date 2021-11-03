import React from "react";
import Table from "./table";
import Form from "./Form";
import './table.css';

class CustomerData extends React.Component {
    state = {
        customers: [],
    }
    removeCustomer = (index) => {
        const { customers } = this.state
        /*filter does not mutate but rather creates a new array,
         and is a preferred method for modifying arrays in JavaScript. */
        this.setState({
            customers: customers.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (customer) => {
        this.setState({ customers: [...this.state.customers, customer] })
    }
    render() {
        const { customers } = this.state
        return (
            <div className="container">
                <Table customerData={customers} removeCustomer={this.removeCustomer} />
                <br />
                <Form  handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default CustomerData;