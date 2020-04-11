import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class EntryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
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
            month: this.props.month,
            name: this.state.name,
            description: this.state.description,
            value: parseFloat(this.state.value),
        };

        this.props.addEntry(entry);
        this.resetForm();

    };

    resetForm = () => {
        document.getElementById("EntryForm").reset();
    };

    render() {
        return (
            <Modal
                ///{props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Form id="EntryForm" onSubmit={ this.handleSubmit } >
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
            </Modal >
        )
    };
}

export default EntryForm;
