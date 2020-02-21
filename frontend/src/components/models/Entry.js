import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';

class Entry extends Component {
    state = {
        month: '',
        name: '',
        description: '',
        value: '',
    };

    handleChange = event => {
        this.setState({ entry: event.target.value });
    };


  render() {
      return (
        <Form>
            <Form.Group contrilId="">
                <Form.Label>Month:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group contrilId="">
                <Form.Label>Name:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group contrilId="">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Form.Group contrilId="">
                <Form.Label>Value:</Form.Label>
                <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        )
    };
}

export default Entry;
