import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
// import Entries from './Entries.js';

class EntryForm extends Component {

    constructor() {
        super();
        this.state = {
            month: '',
            name: '',
            description: '',
            value: '',
        };
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        const entry = {
            month: this.state.month,
            name: this.state.name,
            description: this.state.description,
            value: parseFloat(this.state.value),
        };

        axios.post('/budget/entries.json', entry)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })

        this.props.addEntry(entry);
        this.resetForm();

    };

    resetForm = () => {
        document.getElementById("EntryForm").reset();
    };

    render() {
      return (
        <Form id="EntryForm" onSubmit={ this.handleSubmit } >
            <Form.Group>
                <Form.Label>Month:</Form.Label>
                <Form.Control type="text" name="month" onChange={ this.handleChange } />
            </Form.Group>
            <Form.Group >
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" name="name" onChange={ this.handleChange } />
            </Form.Group>
            <Form.Group >
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" name="description" onChange={ this.handleChange } />
            </Form.Group>
            <Form.Group >
                <Form.Label>Value:</Form.Label>
                <Form.Control type="text" name="value" onChange={ this.handleChange } />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        )
    };
}

export default EntryForm;
