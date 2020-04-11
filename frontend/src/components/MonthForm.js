import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const MonthRegEx = /^([0-9]{4}-[0-9]{2})$/

class MonthForm extends Component {
    constructor () {
        super();
        this.state = {
            month: '',
            hasError: null,
        };
    };

    // componentDidUpdate (prevState) {
    //     console.log('DidErr', this.state.hasError);
    // };

    // componentWillUpdate(prevState) {
    //     console.log('willErr', this.state.hasError);
    // };

    handleChange = event => {
        this.setState({ month: event.target.value }); 
    };

    handleSubmit = event => {
        event.preventDefault();

        const month = this.state.month;
        if (MonthRegEx.test(month)) {
            this.props.setMonth(month);
            this.resetForm();
            this.setState({ hasError: false });
        }
        else if (month === null) {
            this.setState({ hasError: false });
        }
        else
        {
            this.setState({ hasError: true });
        };

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


