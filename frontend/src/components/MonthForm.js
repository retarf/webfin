import React, { Component } from 'react';
import { Form, InputGroup, FormControl, Button } from 'react-bootstrap';

class MonthForm extends Component {
    constructor () {
        super();
        this.state = {
            month: '',
        };
    };

    handleChange = event => {
        this.setState({ month: event.target.value }); 
    };

    handleSubmit = event => {
        event.preventDefault();

        const month = this.state.month;
        this.props.setMonth(month)
        this.resetForm()
    };

    resetForm = () => {
        document.getElementById("MonthForm").reset();
    };

    render() {
        return (
            <Form id="MonthForm" onSubmit={ this.handleSubmit } >
                <InputGroup className="mb-3">
                    <FormControl type="text" name="month" onChange={ this.handleChange }
                        placeholder="Month: RRRR-MM"
                        aria-label="Month"
                        aria-describedby="Month"
                    />
                    <InputGroup.Append>
                        <Button variant="outline-primary" type="submit" >Search</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form>
        );
    };

};

export default MonthForm;


