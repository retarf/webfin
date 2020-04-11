import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

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
        this.props.setMonth(month);
        this.resetForm();
    };

    resetForm = () => {
        document.getElementById("MonthForm").reset();
    };

    render() {
        return (
            <Form inline id="MonthForm" onSubmit={ this.handleSubmit } >
                <FormControl className="mr-sm-2" type="text" name="month" onChange={ this.handleChange }
                    placeholder="Month: RRRR-MM"
                    aria-label="Month"
                    aria-describedby="Month"
                />
                <Button variant="outline-primary" type="submit" >Search</Button>
            </Form>
        );
    };
};

export default MonthForm;


