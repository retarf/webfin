import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import EntryForm from './EntryForm.js';

class EntryModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            type: null,
            title: null,
            button: null,
            month: null,
            id: null,
        };
    };

    componentDidUpdate(prevProps) {
        if (prevProps.type !== this.props.type) {
            this.setState({ type: this.props.type });
            let title = '';
            let button = '';
            if (this.props.type === 'ADD') {
                title = 'Add Entry';
                button = 'Add';

            };
            this.setState(
                {
                    title: title,
                    button: button,
                    month: this.props.month,
                })
        };
    };

    render() {
        return (
            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={ this.props.show }
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        { this.state.title }
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>{ this.state.title }</h4>
                    <EntryForm 
                        addEntry = { this.addEntry } 
                        month = { this.state.month }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={ this.props.onHide }>{ this.state.button }</Button>
                    <Button onClick={ this.props.onHide }>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    };
};

export default EntryModal;
