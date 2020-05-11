import React, { Component } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class EntryForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            month: null,
            id: null,
            title: '',
            button: '',
        };
    };

    FormType = {
        add: {
            title: 'Add Entry',
            button: 'Add',
        },
        modify: {
            title: 'Modify Entry',
            button: 'Modify',
        },
    };

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.setState({ type: this.props.type });
            let title = '';
            let button = '';
            if (this.props.type === 'ADD') {
                title = this.FormType.add.title;
                button = this.FormType.add.button;
            };
            this.setState(
                {
                    title: title,
                    button: button,
                    month: this.props.month,
                })
        };
    };

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();

        let entry = {
            month: this.props.month,
            name: this.state.name,
            description: this.state.description,
            value: parseFloat(this.state.value),
        }

        this.props.addEntry(entry);
        this.resetForm();
    };

    resetForm = () => {
        document.getElementById("EntryForm").reset();
    };

    render() {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show = { this.props.show }
                onHide = { this.props.onHide }
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        { this.state.title }
                    </Modal.Title>
                </Modal.Header>
                <Form id="EntryForm" onSubmit={ this.handleSubmit } >
                    <Modal.Body>
                        <h4>{ this.state.title }</h4>
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
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" type="submit" onClick={ this.props.onHide }>{ this.state.button }</Button>
                        <Button onClick={ this.props.onHide }>Close</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    };
};

export default EntryForm;
